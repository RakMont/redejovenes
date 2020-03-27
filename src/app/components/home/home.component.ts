import { Component, OnInit } from '@angular/core';
import {ShowEventosComponent}from 'src/app/components/eventos/show-eventos/show-eventos.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import{MatButtonModule}from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  EventoScreen;

  constructor() { }

  ngOnInit(): void {
  }

}
