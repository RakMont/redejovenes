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
  selector: 'app-update-tema',
  templateUrl: './update-tema.component.html',
  styleUrls: ['./update-tema.component.css']
})
export class UpdateTemaComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<UpdateTemaComponent>,public service:TemaService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
   }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
  }
  listData:MatTableDataSource<any>;


  charge(){
    this.service.getTema().subscribe(data=>{
      this.listData= new MatTableDataSource(data);
      this.listData.sort=this.sort;
    });
  }
  close(){
    this.dialogbox.close();
  }
  onSubmit(form:NgForm){
    this.service.updateTema(form.value).subscribe(res=>
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
