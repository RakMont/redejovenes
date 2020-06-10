import { Component, OnInit,ViewChild} from '@angular/core';
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
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  convenios:Convenio[];
  things=[];
  public hvaAudio: any=File;
  public aux;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  existelist=false;

  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private convenioservice: ConvenioService, private router: Router,private dialog: MatDialog) {
    this.convenioservice.listen().subscribe((m:any)=>{
      console.log(m);
      //this.charge();

    });
  }
  listData:MatTableDataSource<any>;

  displayedColumns:string[]=['id_HVT','titulo','fecha','contenido','opciones'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //@ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {
    this.convenioservice.getConvenios().subscribe(response=>{
      this.photos=response;
    this.Convertlist();
    if(this.things[0]!=null){
      this.existelist=true;
    }
    });
    this.convenioservice.getConv()
      .subscribe(data =>{
   this.convenios = data;
   this.aux=this.convenios[0];
   console.log("this is ",this.aux);
   this.Convertlist();
 });
 this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
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
      this.things.push({photo:photo,imagen:this.aux.imagen,id_convenio:this.aux.id_convenio,institucion:this.aux.institucion,descripcion:this.aux.descripcion,direccion:this.aux.direccion});
      c=c+1;
    }

  }


  edit_HVV(some):void{
    let convenio=new Convenio
    convenio.id_convenio=some.id_convenio;
    convenio.institucion=some.institucion;
    convenio.descripcion=some.descripcion;
    convenio.direccion=some.direccion;
    convenio.imagen=some.imagen;

    let dio: any=File;
    dio=some.photo;
    this.convenioservice.formData=convenio;
    this.convenioservice.ConvImage=dio;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditConvenioComponent,dialogConfig);

   localStorage.setItem("id_convenio", convenio.id_convenio.toString());
   this.router.navigate(["showConvenios"]); //in  app routing.ts => edit

  }

  Delete(some){
    let convenio=new Convenio
    convenio.id_convenio=some.id_convenio;
    if(confirm('Estas seguro de eliminar ?')){
     this.convenioservice.deleteConvenio(convenio)
     .subscribe(data=>{
     // this.charge();
      this.things=this.things.filter(t=>t!==some);
       this.snackBar.open('Eliminado Correctamente','',{
         duration:5000,
         verticalPosition:'top'
       });
    });
   }

  }

  charge(){
    this.convenioservice.getConvenios().subscribe(response=>{
      this.photos=response;
      this.Convertlist();
    });
    this.convenioservice.getConv()
      .subscribe(data =>{
   this.convenios = data;
 });
  }
}
