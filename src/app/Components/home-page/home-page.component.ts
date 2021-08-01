import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

  template:` <app-landing-page-navbar-component></app-landing-page-navbar-component>`
})
export class HomePageComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {


  }
}
