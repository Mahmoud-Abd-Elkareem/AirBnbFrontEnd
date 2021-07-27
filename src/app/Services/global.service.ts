import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../Modules/DTO/LoginDto'
import { RegisterDto } from '../Modules/DTO/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }

  Login(account :LoginDto){
    console.log(`${account.email} -- ${account.password}`); 
    // return this.http.post(environment.apiUrl , account);
  }

  Register(account :RegisterDto){
    console.log(`${account.email} -- ${account.password}`); 
    // return this.http.post(environment.apiUrl , account); 
  }
}
