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
  public aux;
  public audios: FileList;
  public audiosShow:any=[];
public things;
public hvaAudio: any=File;
  public counter=0;
  historiasHVA:HistoriaVidaAudio[];
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
        let auxiliar:String;
           this.historiaVidaAudioService.getHVAAudios().subscribe(response=>{
        this.audios=response;
          this.hvaAudio=this.audios[0];
        auxiliar=this.audios[0].name;
          console.log("this is ",auxiliar);



    //this.Convertlist();
    //this.hvaAudio=this.aux;
    //console.log("this is the name",this.hvaAudio);
    const file=this.hvaAudio;

});
  this.historiaVidaAudioService.getHVA()
   .subscribe(data =>{
     this.historiasHVA = data;
     this.convert();
      //this.Convertlist();



   });

  }


convert(){
  for (let entry of this.historiasHVA) {
    this.archivo = entry.archivo_mp3;
    entry.archivo_mp3='../../../../assets/HistoriaVidaAudio/'+this.archivo+'.mp3';
  }
}
/*
convert2(){
  for (let entry of this.audios) {
      for(let entry2 of this.historiasHVA){
        if(entry2.archivo_mp3==entry.name){
              this.audiosShow[this.counter]=entry;
              this.counter=this.counter+1;
        }
      }
  }
}
*/

AddHVA(){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="70%";
  this.dialog.open(AddHistoriaVidaAudioComponent,dialogConfig);
 }
 /*
Convertlist(){
  for (let entry of this.historiasHVA) {
    console.log(entry.id_HVA);
    for(let audis of this.audios){
      console.log(entry.titulo);

          if(entry.archivo_mp3==audis.name){

              this.things[this.counter]={
                    historiahva:entry,
                    audiomp3:audis
              }
              this.counter=this.counter+1;
            }
    }
  }

}*/
}
