import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisionService } from 'src/app/services/vision.service';
import { Subscriber } from 'rxjs';
import { Vision } from 'src/app/models/Vision';
import {MatSnackBar}from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import{NgForm}from '@angular/forms';


@Component({
  selector: 'app-edit-vision',
  templateUrl: './edit-vision.component.html',
  styleUrls: ['./edit-vision.component.css']
})
export class EditVisionComponent implements OnInit {
  vision: Vision=new Vision();
  constructor(private snackBar:MatSnackBar, private router:Router,public dialogbox:MatDialogRef<EditVisionComponent>,public service:VisionService) { 
    console.log(this.vision);
  };
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void{
    this.edit_vision();
  }
  edit_vision(){
    let id_vision=localStorage.getItem("id_vision");
    this.service.getVisionId(+id_vision)
    .subscribe(data => {
      this.vision = data;
    })
  }
  close(){
    this.dialogbox.close();
  }
  Actualizar(vision:Vision){
    this.service.updateVision(vision)
    .subscribe(data=>{
      this.vision=data;
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
    this.service.updateVision(form.value).subscribe(res=>
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