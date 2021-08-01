import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page-navbar-component',
  templateUrl: './landing-page-navbar-component.component.html',
  styleUrls: ['./landing-page-navbar-component.component.css']
})
export class LandingPageNavbarComponentComponent implements OnInit {
  
  isLoggdIn:boolean = false;
  ProfileImageUrl:string ="../../../../assets/Images/avatar-image.png";

  constructor(private router:Router , private _globalService : GlobalService) { }

  ngOnInit(): void {
    this.isLoggdIn = this._globalService.IsLoggedIn();
  }

  onLogoutClick(){
    localStorage.removeItem(environment.auth_token_key);

    //i want to enforce the page to reload,
    //because i want the navbar to change status from (logout to login again).
    location.href = `${location.origin}/account/login`;
  }

}
