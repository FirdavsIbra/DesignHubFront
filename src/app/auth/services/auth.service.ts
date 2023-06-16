import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from 'src/app/constants/api.url';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user!: IUser;

  public constructor(private router: Router, private http: HttpClient) { }

  public register(_email: string, _password: string): void {
    const apiUrl = `${API_URL}auth/register?Username=${_email}&Password=${_password}`;

    this.http.post(apiUrl, null).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigateByUrl('/main');
      },
      error: (error: any) => {
        console.error(error);
        alert("This username already taken.");
      }
    });
  }

  public login(email: string, password: string) {
    const apiUrl = `${API_URL}auth/login?Username=${email}&Password=${password}`;

    this.http.post(apiUrl, null).subscribe({
      next: (response: any) => {
        const token = response.token;
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/main');
      },
      error: (error: any) => {
        console.error(error);
        alert("Username or password is invalid.");
      }
    })
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth-page/auth');
  }
}
