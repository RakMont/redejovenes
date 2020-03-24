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
  selector: 'app-edit-historia-vida-texto',
  templateUrl: './edit-historia-vida-texto.component.html',
  styleUrls: ['./edit-historia-vida-texto.component.css']
})
export class EditHistoriaVidaTextoComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<EditHistoriaVidaTextoComponent>,public service:HistoriaVidaTextoService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
   }
   listData:MatTableDataSource<any>;

   @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
  }


  charge(){
    this.service
    .getHVT().subscribe(data=>{
      this.listData= new MatTableDataSource(data);
      this.listData.sort=this.sort;
    });
  }
  close(){
    this.dialogbox.close();
  }
  onSubmit(form:NgForm){
    this.service.updateHVT(form.value).subscribe(res=>
    {
      this.dialogbox.close();
      this.service.filter("Register click");
      this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
    })

  }


}
