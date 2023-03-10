import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registeredUsers: any[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  private currentUser: any;
  public isLoggedIn : boolean = false;
  public email : string = '';

  constructor() { }

  register(user: any): void {
    this.registeredUsers.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
    console.log(this.registeredUsers);
  }

  login(email: string, password: string): Observable<boolean> {
    const user = this.registeredUsers.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.isLoggedIn = true;
      this.email = user.email;
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.currentUser = null;
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}
