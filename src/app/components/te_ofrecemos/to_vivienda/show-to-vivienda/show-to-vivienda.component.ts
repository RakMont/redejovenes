import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { TeofrecemosService } from 'src/app/services/teofrecemos.service';
import { Subscriber} from 'rxjs';
import { TeOfrecemos } from 'src/app/models/TeOfrecemos';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { EditToViviendaComponent } from '../edit-to-vivienda/edit-to-vivienda.component';
import { AddToViviendaComponent } from '../add-to-vivienda/add-to-vivienda.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-show-to-vivienda',
  templateUrl: './show-to-vivienda.component.html',
  styleUrls: ['./show-to-vivienda.component.css']
})
export class ShowToViviendaComponent implements OnInit {

  teofrecemos:TeOfrecemos[];
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  dataSource=null;
  existelist=false;

  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private teofrecemosService: TeofrecemosService, private router: Router,private dialog: MatDialog) {
    this.teofrecemosService.listen().subscribe((m:any)=>{
      console.log(m);
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

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.teofrecemosService.getTeOfrecemosVivienda().subscribe(data =>{
      this.teofrecemos = data;
      if(this.teofrecemos[0]!=null){
        this.existelist=true;
      }
      this.charge();
    });
  }

  charge(){
    this.teofrecemosService.getTeOfrecemosVivienda().subscribe(data=>{
      this.teofrecemos=data;
    });
  }

  edit_Vivienda(teOfrecemos: TeOfrecemos){
    this.teofrecemosService.formData=teOfrecemos;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditToViviendaComponent,dialogConfig);

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

  AddVivienda(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddToViviendaComponent,dialogConfig);
  }

}
