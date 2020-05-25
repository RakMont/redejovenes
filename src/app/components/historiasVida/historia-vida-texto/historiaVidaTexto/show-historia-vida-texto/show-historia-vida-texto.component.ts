import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaVidaTextoService } from 'src/app/services/historia-vida-texto.service';
import { Subscriber} from 'rxjs';
import { historiaVidaTexto } from 'src/app/models/historiaVidaTexto-model';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddHistoriaVidaTextoComponent}from 'src/app/components/historiasVida/historia-vida-texto/historiaVidaTexto/add-historia-vida-texto/add-historia-vida-texto.component';
import{EditHistoriaVidaTextoComponent}from 'src/app/components/historiasVida/historia-vida-texto/historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { EditHistoriaVidaVideoComponent } from '../../../historia-vida-video/historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';

import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-show-historia-vida-texto',
  templateUrl: './show-historia-vida-texto.component.html',
  styleUrls: ['./show-historia-vida-texto.component.css']
})
export class ShowHistoriaVidaTextoComponent implements OnInit {
  historiasHVT:historiaVidaTexto[];

  dataSource=null;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private historiaVidaTextoService: HistoriaVidaTextoService, private router: Router,private dialog: MatDialog) {
    this.historiaVidaTextoService.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
  }


  listData:MatTableDataSource<any>;

  displayedColumns:string[]=['id_HVT','titulo','fecha','contenido','opciones'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //@ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {
    this.historiaVidaTextoService.getHVT()
   .subscribe(data =>{
     this.historiasHVT = data;
     this.charge();
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
  charge(){
    this.historiaVidaTextoService
    .getHVT().subscribe(data=>{
      this.historiasHVT=data;
    });
    }

  applyFilter(filtervalue:string){
    this.listData.filter=filtervalue.trim().toLocaleLowerCase();
  }

  edit_HVT(historiaVidaTexto: historiaVidaTexto){
    this.historiaVidaTextoService.formData=historiaVidaTexto;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditHistoriaVidaTextoComponent,dialogConfig);

   localStorage.setItem("id_HVT", historiaVidaTexto.id_HVT.toString());
  }

  Delete(historiaVidaTexto: historiaVidaTexto){
    if(confirm('Estas seguro de eliminar ? ')){
      this.historiaVidaTextoService.deleteHVT(historiaVidaTexto)
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

   AddHVT(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddHistoriaVidaTextoComponent,dialogConfig);
   }


}
