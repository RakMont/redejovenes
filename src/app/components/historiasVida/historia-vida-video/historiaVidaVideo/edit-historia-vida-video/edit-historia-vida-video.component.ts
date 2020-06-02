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
import { HistoriaVidaVideoService } from 'src/app/services/historia-vida-video.service';
@Component({
  selector: 'app-edit-historia-vida-video',
  templateUrl: './edit-historia-vida-video.component.html',
  styleUrls: ['./edit-historia-vida-video.component.css']
})
export class EditHistoriaVidaVideoComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<EditHistoriaVidaVideoComponent>,public service:HistoriaVidaVideoService) {
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
   .getHVV().subscribe(data=>{
     this.listData= new MatTableDataSource(data);
     this.listData.sort=this.sort;
   });
 }
 close(){
   this.dialogbox.close();
 }
 onSubmit(form:NgForm){

   this.service.updateHVV(form.value).subscribe(res=>
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
