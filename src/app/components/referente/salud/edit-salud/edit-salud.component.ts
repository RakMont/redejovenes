import { Component, OnInit,ViewChild} from '@angular/core';
import{MatDialogRef}from '@angular/material/dialog';
import{NgForm}from '@angular/forms';

import { Router } from '@angular/router';
import { ReferenteService } from 'src/app/services/referente.service';
import { Subscriber} from 'rxjs';
import { Referente } from 'src/app/models/Referente';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@Component({
  selector: 'app-edit-salud',
  templateUrl: './edit-salud.component.html',
  styleUrls: ['./edit-salud.component.css']
})
export class EditSaludComponent implements OnInit {
  constructor(private snackBar:MatSnackBar,private router: Router,public dialogbox:MatDialogRef<EditSaludComponent>,public service:ReferenteService) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);


    });
  }
  listData:MatTableDataSource<any>;
  referente:Referente;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
  }

  close(){
    this.dialogbox.close();
  }
  onSubmit(form:NgForm){
    this.service.editarReferenteSalud(form.value).subscribe(res=>
    {
      this.dialogbox.close();
      this.service.filter("Register click");
      this.snackBar.open('Editado con exito','',{
        duration:5000,
        verticalPosition:'top'
      })
    })
    this.service
    .getReferenteSalud().subscribe(data=>{
      this.referente=data;
    });
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["showRefSalud"]));
  }

}
