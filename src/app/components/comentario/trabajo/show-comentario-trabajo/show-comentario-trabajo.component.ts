import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Subscriber} from 'rxjs';
import { Comentario } from 'src/app/models/Comentario';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddComentarioTrabajoComponent}from 'src/app/components/comentario/trabajo/add-comentario-trabajo/add-comentario-trabajo.component';
import{EditComentarioTrabajoComponent}from 'src/app/components/comentario/trabajo/edit-comentario-trabajo/edit-comentario-trabajo.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
@Component({
  selector: 'app-show-comentario-trabajo',
  templateUrl: './show-comentario-trabajo.component.html',
  styleUrls: ['./show-comentario-trabajo.component.css']
})
export class ShowComentarioTrabajoComponent implements OnInit {
  comentariosRaw:Comentario[];
  comentarios:Comentario[];

  dataSource=null;
  constructor(private snackBar:MatSnackBar,private service: ComentarioService, private router: Router,private dialog: MatDialog) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);


    });
   }

  ngOnInit(): void {
    this.service.listComentariosRawTrabajo()
   .subscribe(data =>{
     this.comentariosRaw = data;
   });
   this.service.listComentariosTrabajo()
   .subscribe(data =>{
     this.comentarios = data;
   });
  }
  charge(){
    this.service.listComentariosRawTrabajo()
    .subscribe(data =>{
      this.comentariosRaw = data;
    });
    this.service.listComentariosTrabajo()
    .subscribe(data =>{
      this.comentarios = data;
    });
    }



  edit_HVT(comentario: Comentario){
    this.service.formData=comentario;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditComentarioTrabajoComponent,dialogConfig);

   localStorage.setItem("id_HVT", comentario.id_comentario.toString());
  }

  Delete(comentario: Comentario){
    if(confirm('Estas seguro de eliminar ? ')){
      this.service.deleteHVT(comentario)
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
    this.dialog.open(AddComentarioTrabajoComponent,dialogConfig);
   }
}
