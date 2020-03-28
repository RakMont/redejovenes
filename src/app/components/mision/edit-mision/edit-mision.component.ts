import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MisionService } from 'src/app/services/mision.service';
import { Subscriber } from 'rxjs';
import { Mision } from 'src/app/models/Mision';
import {MatSnackBar}from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import{NgForm}from '@angular/forms';


@Component({
  selector: 'app-edit-mision',
  templateUrl: './edit-mision.component.html',
  styleUrls: ['./edit-mision.component.css']
})
export class EditMisionComponent implements OnInit {
  mision: Mision=new Mision(); 
   constructor(private snackBar:MatSnackBar, private router:Router,public dialogbox:MatDialogRef<EditMisionComponent>,public service:MisionService) {
   console.log(this.mision);
  };
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit():void{
    this.edit_mision();
  }
  edit_mision(){
    let id_mision=localStorage.getItem("id_mision");
    this.service.getMisionId(+id_mision)
    .subscribe(data => {
      this.mision = data;
    })
  }
  close(){
    this.dialogbox.close();
  }
  Actualizar(mision:Mision){
    this.service.updateMision(mision)
    .subscribe(data=>{
      this.mision=data;
      this.dialogbox.close();
      //this.service.filter("Register click");
      this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
    })
  }
  onSubmit(form:NgForm){
    this.service.updateMision(form.value).subscribe(res=>
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