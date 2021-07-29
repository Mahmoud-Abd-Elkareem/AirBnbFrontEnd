import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterDto } from '../Modules/DTO/RegisterDto';
import { UpdatePasswordDto } from '../Modules/DTO/UpdatePasswordDTO';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http:HttpClient) { }

  
  UpdatePersonalInfo(pInfo :RegisterDto){
    console.log(pInfo); 
    // return this.http.post(environment.apiUrl , pInfo);
  }

  UpdatePassword(securityInfo :UpdatePasswordDto){
    console.log(securityInfo); 
    // return this.http.post(environment.apiUrl , securityInfo); 
  }

}
