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
  searchBtn!: HTMLElement;
  modeSwitch!: HTMLElement;
  modeText!: HTMLElement;

  public constructor() {
    this.body = document.querySelector('body')!;
  }

  public ngOnInit(): void {
    this.sidebar = this.body.querySelector('nav')!;
    this.toggle = this.body.querySelector('.toggle')!;
    this.searchBtn = this.body.querySelector('.search-box')!;
    this.modeSwitch = this.body.querySelector('.toggle-switch')!;
    this.modeText = this.body.querySelector('.mode-text')!;

    if (localStorage.getItem('mode') === 'dark') {
      this.body.classList.add('dark');
      this.modeText.innerText = 'Light mode';
    }

    this.toggle.addEventListener('click', () => {
      this.sidebar.classList.toggle('close');
    });

    this.searchBtn.addEventListener('click', () => {
      this.sidebar.classList.remove('close');
    });

    this.modeSwitch.addEventListener('click', () => {
      this.body.classList.toggle('dark');
      if (this.body.classList.contains('dark')) {
        this.modeText.innerText = 'Light mode';
        localStorage.setItem('mode', 'dark');
      } else {
        this.modeText.innerText = 'Dark mode';
        localStorage.setItem('mode', 'light');
      }
    });
  }
}