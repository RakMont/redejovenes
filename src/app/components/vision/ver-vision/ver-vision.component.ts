import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisionService } from 'src/app/services/vision.service';
import { Subscriber } from 'rxjs';
import { Vision } from 'src/app/models/Vision';
import { MatDialog,MatDialogConfig }from '@angular/material/dialog';
import { EditMisionComponent } from 'src/app/components/mision/edit-mision/edit-mision.component';
import { MatSnackBar }from '@angular/material/snack-bar';
import { EditVisionComponent } from '../edit-vision/edit-vision.component';

@Component({
  selector: 'app-ver-vision',
  templateUrl: './ver-vision.component.html',
  styleUrls: ['./ver-vision.component.css']
})
export class VerVisionComponent implements OnInit {
  visiones: Vision[];
  vision:Vision;
  constructor(private snackBar:MatSnackBar,private visionService: VisionService, private router: Router, private dialog: MatDialog) { }
  
  ngOnInit() {
    this.visionService.getVision().subscribe(data =>{
     this.visiones = data;
     this.vision = data[0];
   });
  }

  edit_vision(vision: Vision):void{
    this.visionService.formData=vision;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditVisionComponent,dialogConfig);
    localStorage.setItem("id_vision", vision.id_vision.toString());
    //this.router.navigate(["edit_vision"]); //in  app routing.ts => edit
  }
}
