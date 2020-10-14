import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public userSubject: BehaviorSubject<any>;
  constructor() {
    this.userSubject = new BehaviorSubject<any>(null);
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  logIn(username: string) {
    return new Promise((res,rej) => {
      const user: any = { username: username };
  
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);

      res(user);
    });
  }

  logOut(){
    localStorage.removeItem('user');
    this.userSubject.next(null);  
  }
}