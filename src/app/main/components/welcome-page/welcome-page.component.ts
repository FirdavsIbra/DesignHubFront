import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-question',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})

export class WelcomePageComponent implements OnInit{
  public form!: FormGroup;

  public constructor(private requestService: RequestService) { }

  public ngOnInit(): void {
    this.initLoginForm();
    this.requestService.getAllUsers();
  }

  public initLoginForm(): void {
    this.form = new FormGroup({
      company_name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      uniqueness: new FormControl('', [Validators.required]),
      logo_concept: new FormControl('', [Validators.required]),
    });
  }

  public onSave(): void {
    const company_name = this.form.controls['company_name'].value;
    const description = this.form.controls['description'].value;
    const uniqueness = this.form.controls['uniqueness'].value;
    const logo_concept = this.form.controls['logo_concept'].value;
    
    this.requestService.addCompany(1, company_name, description, uniqueness, logo_concept);
  }
}