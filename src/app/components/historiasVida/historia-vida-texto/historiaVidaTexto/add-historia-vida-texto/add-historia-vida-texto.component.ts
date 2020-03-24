import { Component, OnInit } from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{HistoriaVidaTextoService}from 'src/app/services/historia-vida-texto.service';
import{NgForm}from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBar}from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import {ViewChild}from '@angular/core';

@Component({
  selector: 'app-add-historia-vida-texto',
  templateUrl: './add-historia-vida-texto.component.html',
  styleUrls: ['./add-historia-vida-texto.component.css']
})
export class AddHistoriaVidaTextoComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<AddHistoriaVidaTextoComponent>,public service:HistoriaVidaTextoService) {
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
  id_HVT:0,
  titulo:'',
  fecha:new Date,
  contenido:''

}
}
onSubmit(form:NgForm){
  //console.log(form.value);
  //this.Guardar();
  this.service.createHVT(form.value).subscribe(res=>{
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
  .getHVT().subscribe(data=>{
    this.listData= new MatTableDataSource(data);
    this.listData.sort=this.sort;
  });
}
Guardar() {
  this.service.createHVT(this.service.formData)
  .subscribe(data => {
  this.snackBar.open('Añadido correctamente','',{
    duration:5000,
    verticalPosition:'top'
  });
  }
  )
  this.close();
}
}

