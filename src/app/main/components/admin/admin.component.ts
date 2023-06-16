import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{
  public users? : IUser[];

  public constructor(private requestService: RequestService){ }

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers(): void {
    this.requestService.getAllUsers().subscribe({
      next: (_users: any) => {
          this.users = _users;
          console.log(this.users);
      },
      error: (error: any) => {
          console.log(error);
      }
    });
  }

  public onClick(): void {
  }

}
