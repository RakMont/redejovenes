import { Component, OnInit } from '@angular/core';
import {MatDialogRef}from '@angular/material/dialog';
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
  selector: 'app-edit-to-vivienda',
  templateUrl: './edit-to-vivienda.component.html',
  styleUrls: ['./edit-to-vivienda.component.css']
})
export class EditToViviendaComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, private router: Router,public dialogbox:MatDialogRef<EditToViviendaComponent>,public service:TeofrecemosService) { 
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
    this.service.getTeOfrecemosVivienda().subscribe(data=>{
      this.listData= new MatTableDataSource(data);
      this.listData.sort=this.sort;
    });
  }

  close(){
    this.dialogbox.close();
  }
  onSubmit(form:NgForm){
    this.service.updateTeOfrecemos(form.value).subscribe(res=>
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
