import { Component, OnInit,ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { TeofrecemosService } from 'src/app/services/teofrecemos.service';
import { Subscriber} from 'rxjs';
import { TeOfrecemos } from 'src/app/models/TeOfrecemos';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddToBecaComponent}from 'src/app/components/te_ofrecemos/to_beca/add-to-beca/add-to-beca.component';
import{EditHistoriaVidaTextoComponent}from 'src/app/components/historiasVida/historia-vida-texto/historiaVidaTexto/edit-historia-vida-texto/edit-historia-vida-texto.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-to-beca',
  templateUrl: './show-to-beca.component.html',
  styleUrls: ['./show-to-beca.component.css']
})
export class ShowToBecaComponent implements OnInit {
  teofrecemos:TeOfrecemos[];

  dataSource=null;
  constructor(private snackBar:MatSnackBar,private teofrecemosService: TeofrecemosService, private router: Router,private dialog: MatDialog) {

   }


   @ViewChild(MatSort, {static: true}) sort: MatSort;
   //@ViewChild(MatSort, null) sort: MatSort;

   ngOnInit() {

   }







 }
