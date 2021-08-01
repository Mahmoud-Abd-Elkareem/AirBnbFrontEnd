import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggdIn:boolean = false;
  ProfileImageUrl:string ="../../../../assets/Images/avatar-image.png";
  // loginstatus(){
  //     this.isLoggdIn=!this.isLoggdIn;
  // }
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
