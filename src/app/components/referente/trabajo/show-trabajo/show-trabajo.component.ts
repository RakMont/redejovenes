import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ReferenteService } from 'src/app/services/referente.service';
import { Subscriber} from 'rxjs';
import { Referente } from 'src/app/models/Referente';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{EditTrabajoComponent}from 'src/app/components/referente/trabajo/edit-trabajo/edit-trabajo.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import{AddComentarioTrabajoComponent}from 'src/app/components/comentario/trabajo/add-comentario-trabajo/add-comentario-trabajo.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import{ShowComentarioTrabajoComponent}from 'src/app/components/comentario/trabajo/show-comentario-trabajo/show-comentario-trabajo.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
@Component({
  selector: 'app-show-trabajo',
  templateUrl: './show-trabajo.component.html',
  styleUrls: ['./show-trabajo.component.css']
})
export class ShowTrabajoComponent implements OnInit {
  referente:Referente;
  dataSource=null;
  link;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private service: ReferenteService, private router: Router,private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getReferenteTrabajo()
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
    this.dialog.open(EditTrabajoComponent,dialogConfig);

    localStorage.setItem("id_referente", referente.id_referente.toString());
  }
  charge(){
    this.service
    .getReferenteTrabajo().subscribe(data=>{
      this.referente=data;
    });
  }
  crearcomentario(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="50%";
    dialogConfig.height="50%";
    this.dialog.open(AddComentarioTrabajoComponent,dialogConfig);

  }
}
