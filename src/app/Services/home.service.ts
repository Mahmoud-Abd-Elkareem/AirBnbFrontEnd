import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../Modules/property';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
Url="https://localhost:44351/api/Property";


GetByCity(){
 console.log(this.http.get<Property[]>(this.Url));
  return this.http.get<Property[]>(this.Url)
}
  constructor(public http:HttpClient , public rout:Router ) {

  }
}
