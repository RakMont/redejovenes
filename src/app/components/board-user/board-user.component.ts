import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserService } from 'src/app/services/user.service';
import { EditProfileComponent } from 'src/app/components/user/edit-profile/edit-profile.component';

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
  constructor(private tokenStorageService: TokenStorageService,private usuarioservice:UsuarioService,private userservice:UserService) { }


    ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

        this.username = user.username;
        this.id=user.id;
      }
      this.userservice.getUserProfile(this.username)
      .subscribe(data =>{
      this.userprof = data;
      console.log(this.userprof);
    });
  }

}
