import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user!: IUser;

  public constructor(private router: Router, private http: HttpClient) { }

  public register(_email: string, _password: string): void {
    const apiUrl = `https://localhost:7140/api/auth/register?Username=${_email}&Password=${_password}`;
    this.http.post(apiUrl, null).subscribe({
      next: (response:any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
        alert("This username already taken.");
      }
    });
    // this.router.navigateByUrl('/main');
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
