import { Component, OnInit } from '@angular/core';
import{UserService}from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EditProfileComponent } from 'src/app/components/user/edit-profile/edit-profile.component';
import { EditperfilComponent } from 'src/app/components/user/editperfil/editperfil.component';

import{MatDialog,MatDialogConfig}from '@angular/material/dialog';
import{Subject}from 'rxjs';
import {Observable} from 'rxjs';
import {MatSnackBar}from '@angular/material/snack-bar';
import { EditprofileasmoderComponent } from '../user/editprofileasmoder/editprofileasmoder.component';
import { EditprofileasadminComponent } from '../user/editprofileasadmin/editprofileasadmin.component';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';
  private roles: string[];
  public image: any=File;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  email:String;
  id;
  userprof:Usuario;
  public images:any=[];
  constructor(private dialog: MatDialog,private tokenStorageService: TokenStorageService,private userservice: UserService) { }

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
    this.userservice.getprofile(this.username).subscribe(data =>{
        this.images=data;
        this.image=this.images[0];
        console.log(this.image);
      });


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
 this.dialog.open(EditprofileasadminComponent,dialogConfig);

 localStorage.setItem("id", usuario.id.toString());
}
}
