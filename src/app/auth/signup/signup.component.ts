import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public signupForm! : FormGroup;

  public constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.initLoginForm();
  }

  public initLoginForm(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  
  public onRegister(): void {
    const email = this.signupForm.controls['email'].value;
    const password = this.signupForm.controls['password'].value;

    if(password.length < 8) {
      alert('Пароль должен иметь как минимум 8 символов.');
      return;
    }

    this.authService.register(email, password);
  }

  public onLogin(){
    this.router.navigateByUrl("auth/login");
  }
}
