import { Component, OnInit } from '@angular/core';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { PodcastService } from 'src/app/services/podcast.service';
import { Subscriber, from} from 'rxjs';
import { Podcast } from 'src/app/models/Podcast';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddPodcastComponent}from 'src/app/components/podcast/add-podcast/add-podcast.component';
import{EditPodcastComponent}from 'src/app/components/podcast/edit-podcast/edit-podcast.component';
import{CreateTemaComponent}from 'src/app/components/tema/create-tema/create-tema.component';
import {FormControl, Validators} from '@angular/forms';
import{TemaService}from 'src/app/services/tema.service';
import{Tema}from 'src/app/models/Tema';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-podcast',
  templateUrl: './show-podcast.component.html',
  styleUrls: ['./show-podcast.component.css']
})
export class ShowPodcastComponent implements OnInit {
  public audios:any=[];

  public audiosShow:any=[];
  temaFiltrado :Tema;
  things=[];

public hvaAudio: any=File;
temas:Tema[];

  public counter:number;

public aux;
selectedValue: string;
   selectedCar: string;
   animalControl = new FormControl('', Validators.required);
   selectFormControl = new FormControl('', Validators.required);
  podcasts:Podcast[];
  msbapTitle = 'Audio Title';
  msbapAudioUrl = '../../../../assets/HistoriaVidaAudio/euphoria.mp3';
  msaapDisplayVolumeControls = true;
  archivo:String
  msbapDisplayTitle = true;

  constructor(public _router:Router,public _location:Location ,private snackBar:MatSnackBar,private podcastService: PodcastService, public serviceTema:TemaService,private router: Router,private dialog: MatDialog) {
    this.podcastService.getPodcastAllAudios().subscribe(response=>{
      this.audios=response;

  });
   }

  ngOnInit(): void {
    this.podcastService.getPodcastAllAudios().subscribe(response=>{
      this.audios=response;
      this.hvaAudio=this.audios[0];
      this.Convertlist();

    });
    this.podcastService.getPodcast()
      .subscribe(data =>{
   this.podcasts = data;
   this.aux=this.podcasts[0];
   console.log("this is ",this.aux);
   this.Convertlist();
   this.serviceTema.getTema().subscribe(response=>{
    this.temas=response;
  });
 });
 /*
    this.router.events.pipe(
    filter((event: RouterEvent) => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.charge();
  });*/
  //this.refresh();

  }

  refresh(){
    this.podcastService.getPodcastAllAudios().subscribe(response=>{
      this.audios=response;
      this.hvaAudio=this.audios[0];
      this.Convertlist();

    });
    this.podcastService.getPodcast()
      .subscribe(data =>{
   this.podcasts = data;
   this.aux=this.podcasts[0];
   console.log("this is ",this.aux);
   this.Convertlist();
   this.serviceTema.getTema().subscribe(response=>{
    this.temas=response;
  });
  this.router.navigateByUrl("/showPodcast",{skipLocationChange:true}).then(()=>{
    console.log(decodeURI(this._location.path()));
    this._router.navigate([decodeURI(this._location.path())]);
  });
});


  }
  AddHVA(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(AddPodcastComponent,dialogConfig);
   }



   filtrarTema(tema:Tema){
    console.log("el tema es ",tema);
    this.podcastService.getPodcastAudiosByTema(tema.id_tema).subscribe(response=>{
      this.audios=response;
      this.hvaAudio=this.audios[0];
      this.Convertlist();
    });
    this.podcastService.getPodcastByTema(tema.id_tema)
      .subscribe(data =>{
   this.podcasts = data;
   this.aux=this.podcasts[0];
   console.log("this is ",this.aux);
   //this.Convertlist();
    });

    this.things=this.things.filter(t=>t!==t);

   }



  Convertlist(){
    let c: number = 0;

    for(let audio of this.audios){
      this.aux=this.podcasts[c];
      this.things.push({ audio:audio,titulo:this.aux.titulo,fecha:this.aux.fecha,id_podcast:this.aux.id_podcast,archivoMP3:this.aux.archivoMP3,descripcion:this.aux.descripcion});
      c=c+1;
    }

  }


  addTema(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="50%";
    dialogConfig.height="50%";
    this.dialog.open(CreateTemaComponent,dialogConfig);

  }

  edit_HVV(some):void{
    let podcast=new Podcast
    podcast.id_podcast=some.id_podcast;
    podcast.titulo=some.titulo;
    podcast.fecha=some.fecha;
    podcast.archivoMP3=some.archivoMP3;
    podcast.descripcion=some.descripcion;
    let dio: any=File;
    dio=some.audio;
    this.podcastService.formData=podcast;
    this.podcastService.hvaAudio=dio;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditPodcastComponent,dialogConfig);

    localStorage.setItem("id_podcast", podcast.id_podcast.toString());

  }

  Delete(some){
    let podcast=new Podcast
    podcast.id_podcast=some.id_podcast;
    if(confirm('Estas seguro de eliminar ? ')){
     this.podcastService.deletePodcast(podcast)
     .subscribe(data=>{
     // this.refresh();
       this.podcasts=this.podcasts.filter(p=>p.id_podcast!==podcast.id_podcast);
       this.audios=this.audios.filter(p=>p!==podcast);
      // this.Convertlist();
       this.things=this.things.filter(t=>t!==some);
       this.snackBar.open('Eliminado Correctamente','',{
       duration:5000,
         verticalPosition:'top'
       });
    });
   }

  }
}
