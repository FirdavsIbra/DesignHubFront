import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/password-validator';

export interface IUser {
  name: string,
  email: string,
  password: string
}

export class User implements IUser {
  name!: string
  email!: string
  password!: string
}

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{
  public loginForm! : FormGroup;
  public registerForm! : FormGroup;
  public user!: IUser
  public confirmPassword!: string;

  public constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.initLoginForm();
  }

  public initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  public switchForm(className: string, e: Event): void {
    e.preventDefault();
    const allForm = document.querySelectorAll('form');
    const form = document.querySelector(`form.${className}`);

    allForm.forEach((item: Element) => {
      item.classList.remove('active');
    });

    form!.classList.add('active');
  }

  public onRegister(): void {
    const email = this.registerForm.controls['email'].value;
    const password = this.registerForm.controls['password'].value;

    this.authService.register(email, password);
  }

  public onLogin(): void {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService.login(email, password);
  }
}
