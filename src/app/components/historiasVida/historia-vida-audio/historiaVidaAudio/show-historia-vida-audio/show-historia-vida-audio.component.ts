import { Component, OnInit } from '@angular/core';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
import { Router } from '@angular/router';
import { HistoriaVidaAudioService } from 'src/app/services/historia-vida-audio.service';
import { Subscriber, from} from 'rxjs';
import { HistoriaVidaAudio } from 'src/app/models/HistoriaVidaAudio';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddHistoriaVidaAudioComponent}from 'src/app/components/historiasVida/historia-vida-audio/historiaVidaAudio/add-historia-vida-audio/add-historia-vida-audio.component';
import{EditHistoriaVidaAudioComponent}from 'src/app/components/historiasVida/historia-vida-audio/historiaVidaAudio/edit-historia-vida-audio/edit-historia-vida-audio.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-historia-vida-audio',
  templateUrl: './show-historia-vida-audio.component.html',
  styleUrls: ['./show-historia-vida-audio.component.css']
})
export class ShowHistoriaVidaAudioComponent implements OnInit {

  public audios:any=[];
  historiasHVA:HistoriaVidaAudio[];
  public audiosShow:any=[];

  things=[];

public hvaAudio: any=File;

  public counter:number;

public aux;


  msbapTitle = 'Audio Title';
  msbapAudioUrl = '../../../../assets/HistoriaVidaAudio/euphoria.mp3';
  msaapDisplayVolumeControls = true;
  archivo:String
  msbapDisplayTitle = true;
  constructor(private snackBar:MatSnackBar,private historiaVidaAudioService: HistoriaVidaAudioService, private router: Router,private dialog: MatDialog) {
    this.historiaVidaAudioService.getHVAAudios().subscribe(response=>{
      this.audios=response;

  });
   }

  ngOnInit(): void {
        this.historiaVidaAudioService.getHVAAudios().subscribe(response=>{
        this.audios=response;
        this.hvaAudio=this.audios[0];
        //auxiliar=this.audios[0].name;
       // console.log("this is ",this.hvaAudio);
       this.Convertlist();

      });
        this.historiaVidaAudioService.getHVA()
   .subscribe(data =>{
     this.historiasHVA = data;
     this.aux=this.historiasHVA[0];
    // this.convert();
     console.log("this is ",this.aux);
    this.Convertlist();
   });


  }




AddHVA(){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="70%";
  this.dialog.open(AddHistoriaVidaAudioComponent,dialogConfig);
 }

Convertlist(){
  let c: number = 0;

  for(let audio of this.audios){
    this.aux=this.historiasHVA[c];
    this.things.push({audio:audio,titulo:this.aux.titulo,fecha:this.aux.fecha,id_HVA:this.aux.id_HVA,archivo_mp3:this.aux.archivo_mp3});
    c=c+1;
  }

}




edit_HVV(some):void{
  let historiaVidaAudio=new HistoriaVidaAudio
  historiaVidaAudio.id_HVA=some.id_HVA;
  historiaVidaAudio.titulo=some.titulo;
  historiaVidaAudio.fecha=some.fecha;
  historiaVidaAudio.archivo_mp3=some.archivo_mp3;
  let dio: any=File;
  dio=some.audio;
  this.historiaVidaAudioService.formData=historiaVidaAudio;
  this.historiaVidaAudioService.hvaAudio=dio;
  const dialogConfig=new MatDialogConfig();
 dialogConfig.disableClose=true;
 dialogConfig.autoFocus=true;
 dialogConfig.width="70%";
 this.dialog.open(EditHistoriaVidaAudioComponent,dialogConfig);

 localStorage.setItem("id_HVA", historiaVidaAudio.id_HVA.toString());

}

Delete(some){
  let historiaVidaVideo=new HistoriaVidaAudio
  historiaVidaVideo.id_HVA=some.id_HVA;
  if(confirm('Estas seguro de eliminar ? ')){
   this.historiaVidaAudioService.deleteHVT(historiaVidaVideo)
   .subscribe(data=>{
     //.historiasHVT=this.historiasHVT.filter(p=>p.id_HVT!==historiaVidaTexto.id_HVT);
     //this.podcasts=this.podcasts.filter(p=>p.id_podcast!==podcast.id_podcast);
     //this.audios=this.audios.filter(p=>p!==podcast);
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
