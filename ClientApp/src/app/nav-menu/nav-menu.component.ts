import { Component, OnInit } from '@angular/core';
import { themeChange } from 'theme-change'


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    const themeCheck = () => {
      if (!this.userTheme) {
          this.mainPage.setAttribute('data-theme', 'night');
          localStorage.setItem('theme', 'night');
          return;
      }
  
      this.mainPage.setAttribute('data-theme', this.userTheme);
  };

  themeCheck();
  }

  mainPage = <HTMLElement>document.querySelector('#html');

  // Theme Vars
  userTheme = localStorage.getItem("theme");


  themeSwitch = (theme: string) => {
    switch (theme) {
      case "light":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "dark":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "dracula":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "pastel":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "coffee":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "business":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "luxury":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "aqua":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "retro":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "synthwave":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "cupcake":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "emerald":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
      case "night":
        this.mainPage.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        break;
    };
  };
}