import { Component, OnInit } from '@angular/core';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
import { Router } from '@angular/router';
import { ConvenioService } from 'src/app/services/convenio.service';
import { Subscriber, from} from 'rxjs';
import { Convenio } from 'src/app/models/Convenio';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddConvenioComponent}from 'src/app/components/convenio/add-convenio/add-convenio.component';
import{EditConvenioComponent}from 'src/app/components/convenio/edit-convenio/edit-convenio.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
@Component({
  selector: 'app-show-convenio',
  templateUrl: './show-convenio.component.html',
  styleUrls: ['./show-convenio.component.css']
})
export class ShowConvenioComponent implements OnInit {
  public photos:any=[];

 // public audiosShow:any=[];
//////////////
  things=[];
//////////////
public hvaAudio: any=File;


public aux;
convenios:Convenio[];


  constructor(private snackBar:MatSnackBar,private convenioservice: ConvenioService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.convenioservice.getConvenios().subscribe(response=>{
      this.photos=response;
      //this.hvaAudio=this.photos[0];
    this.Convertlist();

    });
    this.convenioservice.getConv()
      .subscribe(data =>{
   this.convenios = data;
   this.aux=this.convenios[0];
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
    this.dialog.open(AddConvenioComponent,dialogConfig);
   }

  Convertlist(){
    let c: number = 0;

    for(let photo of this.photos){
      this.aux=this.convenios[c];
      this.things.push({imagen:photo,id_convenio:this.aux.id_convenio,institucion:this.aux.institucion,descripcion:this.aux.descripcion,direccion:this.aux.direccion});
      c=c+1;
    }

  }


  edit_HVV(some):void{
    let convenio=new Convenio
    convenio.id_convenio=some.id_convenio;
    convenio.institucion=some.institucion;
    convenio.descripcion=some.descripcion;
    convenio.direccion=some.direccion;
    convenio.imagen=some.photo;

    let dio: any=File;
    dio=some.audio;
    this.convenioservice.formData=convenio;
    this.convenioservice.ConvImage=dio;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditConvenioComponent,dialogConfig);

   localStorage.setItem("id_convenio", convenio.id_convenio.toString());

  }

  Delete(some){
    let convenio=new Convenio
    convenio.id_convenio=some.id_convenio;
    if(confirm('Estas seguro de eliminar ?')){
     this.convenioservice.deleteConvenio(convenio)
     .subscribe(data=>{
       //.historiasHVT=this.historiasHVT.filter(p=>p.id_HVT!==historiaVidaTexto.id_HVT);
       this.snackBar.open('Eliminado Correctamente','',{
         duration:5000,
         verticalPosition:'top'
       });
    });
   }

  }
}
