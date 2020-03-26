import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaVidaVideoService } from 'src/app/services/historia-vida-video.service';
import { Subscriber} from 'rxjs';
import { HistoriaVidaVideo } from 'src/app/models/HistoriaVidaVideo';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddHistoriaVidaVideoComponent}from 'src/app/components/historiasVida/historia-vida-video/historiaVidaVideo/add-historia-vida-video/add-historia-vida-video.component';
import{EditHistoriaVidaVideoComponent}from 'src/app/components/historiasVida/historia-vida-video/historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-historia-vida-video',
  templateUrl: './show-historia-vida-video.component.html',
  styleUrls: ['./show-historia-vida-video.component.css']
})
export class ShowHistoriaVidaVideoComponent implements OnInit {
  historiasHVV:HistoriaVidaVideo[];

  dataSource=null;
  constructor(private snackBar:MatSnackBar,private historiaVidaVideoService: HistoriaVidaVideoService, private router: Router,private dialog: MatDialog) {
    /*this.historiaVidaVideoService.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });*/
   }

  ngOnInit(): void {
  }
  AddHVT(){

  }
  edit_HVT(){

  }

}
