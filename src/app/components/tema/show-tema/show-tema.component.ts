import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { TemaService } from 'src/app/services/tema.service';
import { Subscriber} from 'rxjs';
import { Tema } from 'src/app/models/Tema';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{CreateTemaComponent}from 'src/app/components/tema/create-tema/create-tema.component';
import{UpdateTemaComponent}from 'src/app/components/tema/update-tema/update-tema.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';


@Component({
  selector: 'app-show-tema',
  templateUrl: './show-tema.component.html',
  styleUrls: ['./show-tema.component.css']
})
export class ShowTemaComponent implements OnInit {
  temas:Tema[];

  dataSource=null;
  constructor(private snackBar:MatSnackBar,private temaService: TemaService, private router: Router,private dialog: MatDialog) {
    this.temaService.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
  }
  listData:MatTableDataSource<any>;

  displayedColumns:string[]=['id_tema','nombreTema','opciones'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.temaService.getTema()
   .subscribe(data =>{
     this.temas = data;
     this.charge();
   });

  }
  applyFilter(filtervalue:string){
    this.listData.filter=filtervalue.trim().toLocaleLowerCase();

  }

  edit_Tema(temas: Tema){
    this.temaService.formData=temas;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(UpdateTemaComponent,dialogConfig);

   localStorage.setItem("id_tema", temas.id_tema.toString());
  }

  Delete(tema: Tema){
    if(confirm('Estas seguro de eliminar ? ')){
      this.temaService.deleteTema(tema)
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

   AddTema(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(CreateTemaComponent,dialogConfig);
   }
   charge(){
    this.temaService
    .getTema().subscribe(data=>{
      this.temas=data;
    });
    }

    gopodcast(){
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(["showPodcast"]));
    }
}
