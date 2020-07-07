import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ReferenteService } from 'src/app/services/referente.service';
import { Subscriber} from 'rxjs';
import { Referente } from 'src/app/models/Referente';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{EditSaludComponent}from 'src/app/components/referente/salud/edit-salud/edit-salud.component';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import{ShowComentarioSaludComponent}from 'src/app/components/comentario/salud/show-comentario-salud/show-comentario-salud.component';
import { AddComentarioSaludComponent } from 'src/app/components/comentario/salud/add-comentario-salud/add-comentario-salud.component';

@Component({
  selector: 'app-show-salud',
  templateUrl: './show-salud.component.html',
  styleUrls: ['./show-salud.component.css']
})
export class ShowSaludComponent implements OnInit {
  referente:Referente;
  dataSource=null;
  link;
  videos;

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private sanitizer: DomSanitizer,private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private service: ReferenteService, private router: Router,private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getReferenteSalud()
    .subscribe(data =>{
      this.referente = data;
      this.link=this.referente.video_referente;
      this.videos=this.link;
      this.videos='https://www.youtube.com/embed/'+this.videos;
      console.log(this.link);
      this.videos=this.sanitizer.bypassSecurityTrustResourceUrl(this.videos);
      //console.log('es to es '+this.referente);
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
    this.dialog.open(EditSaludComponent,dialogConfig);

    localStorage.setItem("id_referente", referente.id_referente.toString());
  }
  charge(){
    this.service
    .getReferenteSalud().subscribe(data=>{
      this.referente=data;
    });
  }
  crearcomentario(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="50%";
    dialogConfig.height="50%";
    this.dialog.open(AddComentarioSaludComponent,dialogConfig);

  }
}
