import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{PodcastService}from 'src/app/services/podcast.service';
import{TemaService}from 'src/app/services/tema.service';
import {FormControl, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import{Podcast}from 'src/app/models/Podcast';

import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import{ShowPodcastComponent}from 'src/app/components/podcast/show-podcast/show-podcast.component';
import{Tema}from 'src/app/models/Tema';
@Component({
  selector: 'app-add-podcast',
  templateUrl: './add-podcast.component.html',
  styleUrls: ['./add-podcast.component.css']
})
export class AddPodcastComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<AddPodcastComponent>,public service:PodcastService,public serviceTema:TemaService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
   }
   selectedValue: string;
   selectedCar: string;
   animalControl = new FormControl('', Validators.required);
   selectFormControl = new FormControl('', Validators.required);
   listData:MatTableDataSource<any>;
   //showHistory:ShowHistoriaVidaAudioComponent;
  public hvaAudio: any=File;
  temas:Tema[];
  public audios:any=[];
  podcasts:Podcast[];
  things=[];
  public aux;

   @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.serviceTema.getTema().subscribe(response=>{
      this.temas=response;
    });
    this.resetForm();

  }
  close(){
    this.dialogbox.close();
    }
    resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData={
      id_podcast:0,
      titulo:'',
      fecha:new Date,
      archivoMP3:'',
      descripcion:'',
      tema:new Tema

    }
 }
    onSubmit(form:NgForm){
      //console.log(form.value);
      const podcast = form.value;
      const formData=new FormData;
      formData.append('podcast',JSON.stringify(podcast));
      formData.append('file',this.hvaAudio);
      this.service.savePodcast(formData).subscribe((res)=>{
        this.router.navigate([ "showPodcast" ]);
        this.resetForm(form);
        this.dialogbox.close();
        //this.charge();

      this.service.filter("Register click");
        this.snackBar.open('Añadido correctamente','',{
          duration:5000,
          verticalPosition:'top'
      });
      })
      this.service.getPodcastAllAudios().subscribe(response=>{
        this.audios=response;
        this.hvaAudio=this.audios[0];
        this.Convertlist();

      });
      this.service.getPodcast()
        .subscribe(data =>{
     this.podcasts = data;

    });
      /*this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(["showPodcast"]));
*/
    }
  onSelectFile(event){
    //const file=event.target.file;
    const file=event.target.files[0];
    console.log(file);
    this.hvaAudio=file;

  }
    charge(){
      this.service
      .getPodcast().subscribe(data=>{
        this.listData= new MatTableDataSource(data);
        this.listData.sort=this.sort;
      });
    }





    Convertlist(){
      let c: number = 0;
      //.log("el ultimo es ",this.audios[0])
      for(let audio of this.audios){
        this.aux=this.podcasts[c];
        this.things.push({ audio:audio,titulo:this.aux.titulo,fecha:this.aux.fecha,id_podcast:this.aux.id_podcast,archivoMP3:this.aux.archivoMP3,descripcion:this.aux.descripcion});
        c=c+1;
      }
      window.location.reload();
    }
}
