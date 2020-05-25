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
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { EditToBecaComponent } from '../edit-to-beca/edit-to-beca.component';


@Component({
  selector: 'app-show-to-beca',
  templateUrl: './show-to-beca.component.html',
  styleUrls: ['./show-to-beca.component.css']
})
export class ShowToBecaComponent implements OnInit {
  teofrecemos:TeOfrecemos[];
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  dataSource=null;
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private teofrecemosService: TeofrecemosService, private router: Router,private dialog: MatDialog) {
    this.teofrecemosService.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();
    });
  }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //@ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {
    this.teofrecemosService.getTeOfrecemosBeca().subscribe(data =>{
      this.teofrecemos = data;
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
    this.teofrecemosService.getTeOfrecemosBeca().subscribe(data=>{
      this.teofrecemos=data;
    });
  }

  edit_Beca(teOfrecemos: TeOfrecemos){
    this.teofrecemosService.formData=teOfrecemos;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditToBecaComponent,dialogConfig);

   localStorage.setItem("id_teOfrecemos", teOfrecemos.id_teOfrecemos .toString());
  }

  Delete(teOfrecemos: TeOfrecemos){
    if(confirm('Estas seguro de eliminar ? ')){
      this.teofrecemosService.deleteHVT(teOfrecemos)
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

  AddBeca(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddToBecaComponent,dialogConfig);
  }
}

