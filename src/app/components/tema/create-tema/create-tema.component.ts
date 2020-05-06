import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{TemaService}from 'src/app/services/tema.service';
import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';

@Component({
  selector: 'app-create-tema',
  templateUrl: './create-tema.component.html',
  styleUrls: ['./create-tema.component.css']
})
export class CreateTemaComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<CreateTemaComponent>,public service:TemaService) {
      this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
  }
  listData:MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
    this.resetForm();

  }
  close(){
    this.dialogbox.close();
    }
    resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData={
      id_tema:0,
      nombreTema:''


    }
    }
    onSubmit(form:NgForm){
      //console.log(form.value);
      //this.Guardar();
      this.service.createTema(form.value).subscribe(res=>{
        this.resetForm(form);
        this.dialogbox.close();
      this.service.filter("Register click");
        this.snackBar.open('Añadido correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });
      })


    }

    charge(){
      this.service
      .getTema().subscribe(data=>{
        this.listData= new MatTableDataSource(data);
        this.listData.sort=this.sort;
      });
    }
}
