import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  body!: HTMLElement;
  sidebar!: HTMLElement;
  toggle!: HTMLElement;
  id? : number;

  public constructor(private requestService: RequestService) {
    this.body = document.querySelector('body')!;
  }

  public ngOnInit(): void {
    this.getMe();
    this.sidebar = this.body.querySelector('nav')!;
    this.toggle = this.body.querySelector('.toggle')!;

    this.toggle.addEventListener('click', () => {
      this.sidebar.classList.toggle('close');
    });
  }

  public getMe(): void {
    this.requestService.getMe().subscribe({
      next: (response: any) => {
        this.id = response.id;
      }
    })
  }
}