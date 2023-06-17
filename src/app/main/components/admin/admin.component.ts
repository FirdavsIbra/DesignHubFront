import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IUser } from 'src/app/models/user';
import { ICompany } from 'src/app/models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{
  public users? : IUser[];
  public company?: ICompany;

  public constructor(private router: Router, private requestService: RequestService){ }

  ngOnInit(): void {
    this.loadUsers();
    this.requestService.getMe();
  }

  public getRoute(): boolean {
    if(this.router.url.length > 11){
      return false;
    }
    return true;
  }

  public loadUsers(): void {
    this.requestService.getAllUsers().subscribe({
      next: (_users: any) => {
          this.users = _users;
      },
      error: (error: any) => {
          console.log(error);
      }
    });
  }

  public onClick(id: number): void {
    void this.router.navigateByUrl(`main/admin/${id.toString()}`);
  }
}
