import { Injectable } from '@angular/core';
import { IUser, User } from '../auth-page/auth-page.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user!: IUser;

  public constructor(private router: Router) { }

  public register(email: string, password: string): void {
    const user: IUser = new User();
    user.email = email;
    user.password = password;
    console.log(user);
    const users: IUser[] = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(users);

    if (users.some(u => u.email === user.email)){
      console.log('User with this email already exists');
      alert('User with this email already exists');
      return;
    }
    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigateByUrl('/main');
  }

  public login(email: string, password: string) {
    const users: IUser[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some(user => user.email === email)) {
      this.router.navigateByUrl('/main');
    } else {
      alert('User not found!');
    }
  }

  public logout(): void {
    this.router.navigateByUrl('/auth-page/auth');
  }
}
