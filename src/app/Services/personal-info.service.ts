import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterDto } from '../Modules/DTO/RegisterDto';
import { UpdatePasswordDto } from '../Modules/DTO/UpdatePasswordDto';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  token: string | null = environment.autho_token_value;
  constructor(private http:HttpClient) { }

  GetPersonalInfo(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(`${environment.apiUrl}/api/User/UserDetails` ,{ headers: headers });
  }

  UpdatePersonalInfo(pInfo :RegisterDto){
    console.log(pInfo); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${this.token}`
    });
    console.log(headers);
    return this.http.post(`${environment.apiUrl}/api/User/UserUpdate` , pInfo ,{headers :headers });
  }

  UpdatePassword(securityInfo :UpdatePasswordDto){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    }); 
    return this.http.post(`${environment.apiUrl}/api/User/ChangePassword` , securityInfo ,{ headers }); 
  }

}
