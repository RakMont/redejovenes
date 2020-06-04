import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ReferenteService } from 'src/app/services/referente.service';
import { Subscriber} from 'rxjs';
import { Referente } from 'src/app/models/Referente';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{EditViviendaComponent}from 'src/app/components/referente/vivienda/edit-vivienda/edit-vivienda.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import{ShowComentarioViviendaComponent}from 'src/app/components/comentario/vivienda/show-comentario-vivienda/show-comentario-vivienda.component';
import { AddComentarioViviendaComponent } from 'src/app/components/comentario/vivienda/add-comentario-vivienda/add-comentario-vivienda.component';

@Component({
  selector: 'app-show-vivienda',
  templateUrl: './show-vivienda.component.html',
  styleUrls: ['./show-vivienda.component.css']
})
export class ShowViviendaComponent implements OnInit {
  referente:Referente;
  dataSource=null;
  link;
  referentes: Referente[];
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private service: ReferenteService, private router: Router,private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getReferenteVivienda()
    .subscribe(data =>{
      this.referente = data;
      this.link=this.referente.video_referente;
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
  edit_referente(referente: Referente):void{

    referente.video_referente="https://www.youtube.com/watch?v="+this.link;
    this.service.formData=referente;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditViviendaComponent,dialogConfig);

    localStorage.setItem("id_referente", referente.id_referente.toString());
  }
  charge(){
    this.service
    .getReferenteVivienda().subscribe(data=>{
      this.referente=data;
    });
  }
  crearcomentario(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="50%";
    dialogConfig.height="50%";
    this.dialog.open(AddComentarioViviendaComponent,dialogConfig);

  }
}
