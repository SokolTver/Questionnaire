import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { UserModel } from './../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private admName = 'adm';
  private admPass = '202cb962ac59075b964b07152d234b70'; // 123
  private userName = 'user';
  private userPass = 'caf1a3dfb505ffed0d024130f58c5cfa'; // 321
  private notAuthorized = 'Гость';

  private currentUser;

  constructor(private router: Router) { }

  login(name: string, password: string): UserModel {
    console.log(Md5.hashAsciiStr(password));
    if (name === this.admName && Md5.hashAsciiStr(password) === this.admPass) {
      console.log('Adm is loged in');
      this.currentUser = { login: this.admName, isAdm: true };
      return this.currentUser;
    }
    if (name === this.userName && Md5.hashAsciiStr(password) === this.userPass) {
      console.log('User is loged in');
      this.currentUser = { login: this.userName, isAdm: false };
      return this.currentUser;
    }

    return null;
  }

  logout() {
    this.currentUser = null;

    if (this.router.url.includes('administrating')) {
      this.router.navigate(['/']);
    }
  }

  get getUserName(): string {
    return this.currentUser?.login ?? this.notAuthorized;
  }

  get isAuthorized(): boolean {
    return this.currentUser != null;
  }

  get isAdmin(): boolean {
    return this.currentUser?.isAdm;
  }
}
