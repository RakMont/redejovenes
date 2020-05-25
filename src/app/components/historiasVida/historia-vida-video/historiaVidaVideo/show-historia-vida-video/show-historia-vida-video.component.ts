import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaVidaVideoService } from 'src/app/services/historia-vida-video.service';
import { Subscriber} from 'rxjs';
import { HistoriaVidaVideo } from 'src/app/models/HistoriaVidaVideo';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort}from '@angular/material/sort';
import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{AddHistoriaVidaVideoComponent}from 'src/app/components/historiasVida/historia-vida-video/historiaVidaVideo/add-historia-vida-video/add-historia-vida-video.component';
import{EditHistoriaVidaVideoComponent}from 'src/app/components/historiasVida/historia-vida-video/historiaVidaVideo/edit-historia-vida-video/edit-historia-vida-video.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { filter } from 'rxjs/operators';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@Component({
  selector: 'app-show-historia-vida-video',
  templateUrl: './show-historia-vida-video.component.html',
  styleUrls: ['./show-historia-vida-video.component.css']
})
export class ShowHistoriaVidaVideoComponent implements OnInit {
  historiasHVV:HistoriaVidaVideo[];

  dataSource=null;
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player.getVideoUrl());
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private historiaVidaVideoService: HistoriaVidaVideoService, private router: Router,private dialog: MatDialog) {
    this.historiaVidaVideoService.listen().subscribe((m:any)=>{
      console.log(m);
      this.charge();

    });
   }

   ngOnInit() {
    this.historiaVidaVideoService.getHVV()
   .subscribe(data =>{
     this.historiasHVV = data;
     this.charge();
   });
   this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
   edit_HVV(historiaVidaVideo: HistoriaVidaVideo):void{
     historiaVidaVideo.video_HVV="https://www.youtube.com/watch?v="+historiaVidaVideo.video_HVV;
    this.historiaVidaVideoService.formData=historiaVidaVideo;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditHistoriaVidaVideoComponent,dialogConfig);

   localStorage.setItem("id_HVV", historiaVidaVideo.id_HVV.toString());
   }

   Delete(historiaVidaVideo: HistoriaVidaVideo){
    if(confirm('Estas seguro de eliminar ? ')){
      this.historiaVidaVideoService.deleteHVV(historiaVidaVideo)
      .subscribe(data=>{
        //.historiasHVT=this.historiasHVT.filter(p=>p.id_HVT!==historiaVidaTexto.id_HVT);
        this.charge();
        this.snackBar.open('Eliminado Correctamente','',{
          duration:5000,
          verticalPosition:'top'
        });
     });
    }

   }


AddHVV(){
  const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddHistoriaVidaVideoComponent,dialogConfig);

}

charge(){
  this.historiaVidaVideoService
  .getHVV().subscribe(data=>{
    this.historiasHVV=data;
  });
}




}






