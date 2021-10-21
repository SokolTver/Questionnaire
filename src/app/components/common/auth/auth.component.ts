import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user/user';
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
    this.updateUserStatus();
  }

  onAuthClick() {
    if (this.userService.isAuthorized) {
      this.userService.logout();
      this.updateUserStatus();
    } else {
      this.dialogVisible = true;
    }
  }

  onOk() {
    this.dialogVisible = false;

    if (this.userService.isAdmin) {
      this.router.navigateByUrl('/administrating');
    }
    this.updateUserStatus();
  }

  onCancel() {
    this.dialogVisible = false;
  }

  updateUserStatus() {
    this.userName = this.userService.getUserName;
    this.isAuthorized = this.userService.isAuthorized;
  }
}
