import { Component, OnInit } from '@angular/core';
import { MatDialogRef }from '@angular/material/dialog';
import { TeofrecemosService } from 'src/app/services/teofrecemos.service';
import {NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';

@Component({
  selector: 'app-add-to-vivienda',
  templateUrl: './add-to-vivienda.component.html',
  styleUrls: ['./add-to-vivienda.component.css']
})
export class AddToViviendaComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox: MatDialogRef<AddToViviendaComponent>, public service: TeofrecemosService) { 
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
  }

  listData:MatTableDataSource<any>; 

  ngOnInit(): void {
    this.resetForm();
  }
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  close(){
    this.dialogbox.close();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      id_teOfrecemos: 0,
      tema: '',
      contenido: '',
      contacto: ''
    }
  }
  onSubmit(form:NgForm){
    this.service.createTeOfrecemosVivienda(form.value).subscribe(res=>{
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
    this.service.getTeOfrecemosVivienda().subscribe(data=>{
      this.listData= new MatTableDataSource(data);
      this.listData.sort=this.sort;
    });
  }

  Guardar() {
    this.service.createTeOfrecemosVivienda(this.service.formData).subscribe(data => {
      this.snackBar.open('Añadido correctamente','',{
        duration:5000,
        verticalPosition:'top'
      });
    })
    this.close();
  }

}
