import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaVidaVideoService } from 'src/app/services/historia-vida-video.service';
import { Subscriber} from 'rxjs';
import { HistoriaVidaVideo } from 'src/app/models/HistoriaVidaVideo';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddHistoriaVidaVideoComponent}from 'src/app/components/historiasVida/historia-vida-video/historiaVidaVideo/add-historia-vida-video/add-historia-vida-video.component';
import{EditHistoriaVidaVideoComponent}from 'src/app/components/historiasVida/historia-vida-video/historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-historia-vida-video',
  templateUrl: './show-historia-vida-video.component.html',
  styleUrls: ['./show-historia-vida-video.component.css']
})
export class ShowHistoriaVidaVideoComponent implements OnInit {
  historiasHVV:HistoriaVidaVideo[];

  dataSource=null;
  constructor(private snackBar:MatSnackBar,private historiaVidaVideoService: HistoriaVidaVideoService, private router: Router,private dialog: MatDialog) {
    /*this.historiaVidaVideoService.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });*/
   }

   ngOnInit() {
    this.historiaVidaVideoService.getHVV()
   .subscribe(data =>{
     this.historiasHVV = data;
   });
  }
   edit_HVV(historiaVidaVideo: HistoriaVidaVideo):void{
        localStorage.setItem("id_HVV", historiaVidaVideo.id_HVV.toString());
        this.router.navigate(["editar"]); //in  app routing.ts => edit
   }

   Delete(historiaVidaVideo: HistoriaVidaVideo){
    this.historiaVidaVideoService.deleteHVV(historiaVidaVideo)
    .subscribe(data=>{
      this.historiasHVV=this.historiasHVV.filter(p=>p!==historiaVidaVideo);

    })


   }


AddHVV(){

}
















/*
   listData:MatTableDataSource<any>;

   displayedColumns:string[]=['id_HVV','titulo','fecha','video_HVV','opciones'];

   @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.charge();
    this.listData.sort = this.sort;
  }
  fetchData() {
    this.historiaVidaVideoService.getHVV().subscribe(data =>{
      this.listData= new MatTableDataSource(data);

    });
  }
  applyFilter(filtervalue:string){
    this.listData.filter=filtervalue.trim().toLocaleLowerCase();
  }
  AddHVV(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddHistoriaVidaVideoComponent,dialogConfig);

  }
  edit_HVV(historiaVidaVideo: HistoriaVidaVideo){
    this.historiaVidaVideoService.formData=historiaVidaVideo;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditHistoriaVidaVideoComponent,dialogConfig);

   localStorage.setItem("id_HVV", historiaVidaVideo.id_HVV.toString());
  }
  charge(){
    this.historiaVidaVideoService
    .getHVV().subscribe(data=>{
      this.listData= new MatTableDataSource(data);
      this.listData.sort=this.sort;
    });
  }
  Delete(historiaVidaVideo: HistoriaVidaVideo){
    if(confirm('Estas seguro de eliminar ? ')){
      this.historiaVidaVideoService.deleteHVV(historiaVidaVideo)
      .subscribe(data=>{
        //.historiasHVT=this.historiasHVT.filter(p=>p.id_HVT!==historiaVidaTexto.id_HVT);
        this.charge();
        this.snackBar.open('Eliminado Correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });

     });
    }
   }*/

}
