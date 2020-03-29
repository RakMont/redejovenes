import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetivoService } from 'src/app/services/objetivo.service';
import { Subscriber } from 'rxjs';
import { Objetivos } from 'src/app/models/Objetivos';
import {MatSnackBar}from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import{NgForm}from '@angular/forms';


@Component({
  selector: 'app-edit-objetivo',
  templateUrl: './edit-objetivo.component.html',
  styleUrls: ['./edit-objetivo.component.css']
})
export class EditObjetivoComponent implements OnInit {
  objetivo: Objetivos=new Objetivos();
  constructor(private snackBar:MatSnackBar, private router:Router,public dialogbox:MatDialogRef<EditObjetivoComponent>,public service:ObjetivoService){
    console.log(this.objetivo);
  };
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit():void {
    this.edit_objetivo();
  }
  edit_objetivo(){
    let id_objetivos=localStorage.getItem("id_objetivos");
    this.service.getObjetivoId(+id_objetivos)
    .subscribe(data => {
      this.objetivo = data;
    })
  }
  close(){
    this.dialogbox.close();
  }
  Actualizar(objetivo:Objetivos){
    this.service.updateObjetivo(objetivo)
    .subscribe(data=>{
      this.objetivo=data;
      this.dialogbox.close();
      //this.service.filter("Register click");
      this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
      //this.router.navigate(["/"]);
    })
  }
  onSubmit(form:NgForm){
    this.service.updateObjetivo(form.value).subscribe(res=>
    {
      this.dialogbox.close();
      //this.service.filter("Register click");
      this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
    })
    //location.reload(true);
     // this.router.navigate(["/"]);

  }
}