import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../Modules/DTO/LoginDto'
import { RegisterDto } from '../Modules/DTO/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient, private router: Router) { }

  Login(account :LoginDto){
    console.log(account); 
    return this.http.post(`${environment.apiUrl}/api/User/Login`, account);
  }

  Register(newUser :RegisterDto){
    console.log(newUser); 
    return this.http.post(`${environment.apiUrl}/api/User/Register` , newUser); 
  }
  
  Logout(){
    // this.http.post(`${environment.apiUrl}/api/User/Logout`).subscribe(
    //   data => {
        // console.log(data);
        localStorage.removeItem(environment.auth_token_key);
        localStorage.removeItem(environment.user_data_key);
        this.router.navigateByUrl('account/login');
    //   },
    //   error =>  console.log(error)
    // ); 
  }

  IsLoggedIn() {
   return environment.autho_token_value !== null && environment.autho_token_value != null && environment.autho_token_value != "";
  }
}
