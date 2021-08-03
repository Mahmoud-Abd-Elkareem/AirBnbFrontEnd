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
  userData:any;
  ProfileImageUrl:string ="../../../../assets/Images/avatar-image.png";
  fname:string="";
  constructor(private router:Router , private _globalService : GlobalService) { }

  ngOnInit(): void {
    this.isLoggdIn = this._globalService.IsLoggedIn();
    
    if(this.isLoggdIn){
     
      let data = localStorage.getItem(environment.user_data_key);
      
      if(data !=null)
      this.userData = JSON.parse(data); 
      
      if(this.userData.image != null)
      this.ProfileImageUrl = `${environment.apiUrl}/images/profile/${this.userData.image}`;
      
      this.fname = this.userData.fname;
    
    }
  }

  onLogoutClick(){
    localStorage.removeItem(environment.auth_token_key);
    localStorage.removeItem(environment.user_data_key);
    
    //i want to enforce the page to reload,
    //because i want the navbar to change status from (logout to login again).
    location.href = `${location.origin}/account/login`;
  }

}
