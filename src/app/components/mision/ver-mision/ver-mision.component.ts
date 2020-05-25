import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MisionService } from 'src/app/services/mision.service';
import { Subscriber } from 'rxjs';
import { Mision } from 'src/app/models/Mision';
import { MatDialog,MatDialogConfig }from '@angular/material/dialog';
import { EditMisionComponent } from 'src/app/components/mision/edit-mision/edit-mision.component';
import { MatSnackBar }from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-ver-mision',
  templateUrl: './ver-mision.component.html',
  styleUrls: ['./ver-mision.component.css']
})
export class VerMisionComponent implements OnInit {
  misiones: Mision[];
  mision:Mision;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private misionservice: MisionService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.misionservice.getMision().subscribe(data =>{
     this.misiones = data;
     this.mision = data[0];
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

  edit_mision(mision: Mision):void{
    this.misionservice.formData=mision;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditMisionComponent,dialogConfig);
    localStorage.setItem("id_mision", mision.id_mision.toString());
    //this.router.navigate(["edit_mision"]); //in  app routing.ts => edit
  }
}

