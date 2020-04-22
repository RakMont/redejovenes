import { Component, OnInit,ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { TeofrecemosService } from 'src/app/services/teofrecemos.service';
import { Subscriber} from 'rxjs';
import { TeOfrecemos } from 'src/app/models/TeOfrecemos';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddToBecaComponent}from 'src/app/components/te_ofrecemos/to_beca/add-to-beca/add-to-beca.component';
import{EditHistoriaVidaTextoComponent}from 'src/app/components/historiasVida/historia-vida-texto/historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-to-beca',
  templateUrl: './show-to-beca.component.html',
  styleUrls: ['./show-to-beca.component.css']
})
export class ShowToBecaComponent implements OnInit {
  teofrecemos:TeOfrecemos[];

  dataSource=null;
  constructor(private snackBar:MatSnackBar,private teofrecemosService: TeofrecemosService, private router: Router,private dialog: MatDialog) {
    this.teofrecemosService.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
   }


   listData:MatTableDataSource<any>;

   displayedColumns:string[]=['id_HVT','titulo','fecha','contenido','opciones'];

   @ViewChild(MatSort, {static: true}) sort: MatSort;
   //@ViewChild(MatSort, null) sort: MatSort;

   ngOnInit() {
     this.teofrecemosService.getTeOfrecemos()
    .subscribe(data =>{
      this.teofrecemos = data;
      this.charge();
    });
   }


   applyFilter(filtervalue:string){
     this.listData.filter=filtervalue.trim().toLocaleLowerCase();
   }
/*
   edit_HVT(te_ofrecemos: TeOfrecemos){
     this.teofrecemosService.formData=te_ofrecemos;
     const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditHistoriaVidaTextoComponent,dialogConfig);

    localStorage.setItem("id_HVT", historiaVidaTexto.id_HVT.toString());
   }
*/
/*
   Delete(historiaVidaTexto: historiaVidaTexto){
     if(confirm('Estas seguro de eliminar ? ')){
       this.teofrecemosService.deleteHVT(historiaVidaTexto)
       .subscribe(data=>{
         //.historiasHVT=this.historiasHVT.filter(p=>p.id_HVT!==historiaVidaTexto.id_HVT);
         this.charge();
         this.snackBar.open('Eliminado Correctamente','',{
           duration:5000,
           verticalPosition:'top'
         });
      });
     }
    }
*/
    AddHVT(){
     const dialogConfig=new MatDialogConfig();
     dialogConfig.disableClose=true;
     dialogConfig.autoFocus=true;
     dialogConfig.width="70%";
     this.dialog.open(AddToBecaComponent,dialogConfig);
    }
    charge(){
     this.teofrecemosService
     .getTeOfrecemos().subscribe(data=>{
       this.teofrecemos=data;
     });
     }

 }
