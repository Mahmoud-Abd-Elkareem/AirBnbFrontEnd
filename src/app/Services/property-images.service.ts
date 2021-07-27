import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyImages } from '../Modules/property-images';

@Injectable({
  providedIn: 'root'
})
export class PropertyImagesService {

  private apiprop ='http://localhost:5000/propertyimage'

  GetPropertyimages(id:number) : Observable<PropertyImages[]>{
    return this.http.get<PropertyImages[]>("http://localhost:5000/propertyimage/"+id)
  }

  constructor(private http:HttpClient) { }
}
