import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserService } from 'src/app/services/user.service';
import { EditProfileComponent } from 'src/app/components/user/edit-profile/edit-profile.component';
import { EditperfilComponent } from 'src/app/components/user/editperfil/editperfil.component';

import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  email:String;
  id;
  userprof:Usuario
  constructor(private dialog: MatDialog,private tokenStorageService: TokenStorageService,private userservice:UserService) { }


    ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

        this.username = user.username;
        this.id=user.id;
        this.email=user.email;
        this.userservice.getUserProfile(this.username)
      .subscribe(data =>{
      this.userprof = data;
      console.log(this.userprof);
    });
      }

  }
  edit_photo(usuario:Usuario){
    this.userservice.formData=usuario;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditperfilComponent,dialogConfig);
   localStorage.setItem("id", usuario.id.toString());

  }
  edit_profile(usuario:Usuario){
    this.userservice.formData=usuario;
    const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EditProfileComponent,dialogConfig);

   localStorage.setItem("id", usuario.id.toString());
  }
}
