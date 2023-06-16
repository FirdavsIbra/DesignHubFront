import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  body!: HTMLElement;
  sidebar!: HTMLElement;
  toggle!: HTMLElement;

  public constructor() {
    this.body = document.querySelector('body')!;
  }

  public ngOnInit(): void {
    this.sidebar = this.body.querySelector('nav')!;
    this.toggle = this.body.querySelector('.toggle')!;

    this.toggle.addEventListener('click', () => {
      this.sidebar.classList.toggle('close');
    });
  }
}