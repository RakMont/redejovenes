import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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

  constructor(private tokenStorageService: TokenStorageService) { }


    ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

        this.username = user.username;

      }

  }

}
