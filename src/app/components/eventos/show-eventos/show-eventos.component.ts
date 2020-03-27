import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import{MatButtonModule}from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
@Component({
  selector: 'app-show-eventos',
  templateUrl: './show-eventos.component.html',
  styleUrls: ['./show-eventos.component.css']
})
export class ShowEventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
