import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private admName = 'adm';
  private admPass = '202cb962ac59075b964b07152d234b70';
  private notAuthorized = 'Гость';

  constructor() { }

  checkUser(name: string, password: string) {
    if (name === this.admName && Md5.hashAsciiStr(password) === this.admPass) {
      console.log('Adm is loged in')
    }
  }

  get getUserName(): string {
    return this.notAuthorized;
  }

  get isAuthorized(): boolean {
    return false;
  }
}
