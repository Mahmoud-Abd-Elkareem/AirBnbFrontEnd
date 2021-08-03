import { Component, OnInit} from '@angular/core';
import { LoginDto } from 'src/app/Modules/DTO/LoginDto';
import { NotifierService } from 'angular-notifier';
import { GlobalService } from 'src/app/Services/global.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _globalService:GlobalService , private notifier:NotifierService, private router: Router) { }

  ngOnInit(): void {
  }

  user: LoginDto = new LoginDto();

  Login(){
    if(this.user.email == undefined ||  this.user.password == undefined ){
      this.notifier.notify('warning','Please fill All Fields.');
    }
     else{
        this._globalService.Login(this.user).subscribe(
          (data:any)=> {
            console.log(data);
            localStorage.removeItem(environment.auth_token_key);
            localStorage.setItem(environment.auth_token_key, data.token);

            localStorage.removeItem(environment.user_data_key);
            localStorage.setItem(environment.user_data_key, JSON.stringify(data.userData));
            // this.router.navigateByUrl('home');
            location.href = `${location.origin}`; // to enforce page reloading to update the navbar
          } ,
          (error:any)=> {
            console.log(error);
            this.notifier.notify('error',`something went wrong, ${error.error.message}`);
          }
        );
     }

  }

}
