import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ReferenteService } from 'src/app/services/referente.service';
import { Subscriber} from 'rxjs';
import { Referente } from 'src/app/models/Referente';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{EditTrabajoComponent}from 'src/app/components/referente/trabajo/edit-trabajo/edit-trabajo.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

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

  constructor(private snackBar:MatSnackBar,private service: ReferenteService, private router: Router,private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getReferenteTrabajo()
    .subscribe(data =>{
      this.referente = data;
      this.link=this.referente.video_referente;


    });
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
}
