import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetivoService } from 'src/app/services/objetivo.service';
import { Subscriber } from 'rxjs';
import { Objetivos } from 'src/app/models/Objetivos';
import { MatDialog,MatDialogConfig }from '@angular/material/dialog';
import { EditMisionComponent } from 'src/app/components/mision/edit-mision/edit-mision.component';
import { MatSnackBar }from '@angular/material/snack-bar';
import { EditObjetivoComponent } from '../edit-objetivo/edit-objetivo.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-ver-objetivo',
  templateUrl: './ver-objetivo.component.html',
  styleUrls: ['./ver-objetivo.component.css']
})
export class VerObjetivoComponent implements OnInit {
  objetivos: Objetivos[];
  objetivo:Objetivos;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService,private snackBar:MatSnackBar,private objetivoService: ObjetivoService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.objetivoService.getObjetivos().subscribe(data =>{
     this.objetivos = data;
     this.objetivo = data[0];
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

  edit_objetivo(objetivos: Objetivos):void{
    this.objetivoService.formData=objetivos;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditObjetivoComponent,dialogConfig);
    localStorage.setItem("id_objetivos", objetivos.id_objetivos.toString());
    //this.router.navigate(["edit_objetivos"]); //in  app routing.ts => edit
  }
}
