import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) {
    this.userName = userService.getUserName;
    this.isAuthorized = userService.isAuthorized;
  }

  onLoginClick() {
    this.dialogVisible = true;
  }

  onOk({login, password}) {
    if (this.userService.checkUser(login, password)) {
      this.dialogVisible = false;

      this.router.navigateByUrl('/administrating');
    }
  }

  onCancel() {
    this.dialogVisible = false;
  }
}
