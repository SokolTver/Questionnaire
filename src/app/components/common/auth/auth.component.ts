import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  userName: string;
  isAuthorized: boolean;
  dialogVisible: boolean = false;

  constructor(private userService: UserService) {
    this.userName = userService.getUserName;
    this.isAuthorized = userService.isAuthorized;
  }

  onLoginClick() {
    this.dialogVisible = true;

    this.userService.checkUser("adm", "123");
  }
}
