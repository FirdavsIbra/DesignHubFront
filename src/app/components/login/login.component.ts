import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public activeForm = 'login';
  public registerEmail: string = '';
  public registerConfirmPassword = '';
  public registerPassword = '';
  public loginEmail = '';
  public loginPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  switchForm(className: string, e: Event): void {
    e.preventDefault();
    const allForm = document.querySelectorAll('form');
    const form = document.querySelector(`form.${className}`);

    allForm.forEach((item: Element) => {
      item.classList.remove('active');
    });

    form!.classList.add('active');
  }

  onRegisterPasswordInput(event: Event): void {
    const registerPassword = event.target as HTMLInputElement;
    const registerConfirmPassword = document.querySelector(
      'form.register #confirm-pass'
    ) as HTMLInputElement;

    this.registerConfirmPassword = registerConfirmPassword.value;
    this.registerPassword = registerPassword.value;

    registerConfirmPassword.pattern = `${registerPassword.value}`;
  }

  onLoginFormSubmit(event: Event): void {
    event.preventDefault();
    this.authService.login(this.loginEmail, this.loginPassword).subscribe(
      (user) => {
        console.log('User authenticated:', user);
        this.router.navigate(['/home']);
      },
      (error) => {
        alert('fasdfasdf');
        console.log('Error:', error);
      }
    );
  }

  onRegisterFormSubmit(event: Event): void {
    event.preventDefault();
    console.log(
      `Email: ${this.registerEmail}, Password: ${this.registerPassword}, Confirm Password: ${this.registerConfirmPassword}`
    );
    const newUser = {
      email: this.registerEmail,
      password: this.registerPassword
    };
    this.authService.register(newUser);
    alert("Succes");
    this.registerEmail = '';
    this.registerPassword = '';
    this.registerConfirmPassword = '';
  }
}
