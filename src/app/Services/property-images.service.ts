import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PropertyImages } from '../Modules/property-images';

@Injectable({
  providedIn: 'root'
})
export class PropertyImagesService {
  constructor(private http:HttpClient) { };



  private apiprop ='http://localhost:5000/propertyimage'
  token : string  | null = environment.autho_token_value;

  headers = new HttpHeaders({
    'Authorize' : `Bearer ${this.token}`
  })

  GetPropertyimages(id:number) : Observable<PropertyImages[]>{
    return this.http.get<PropertyImages[]>("https://localhost:44351/api/PropertyImage/"+id)
  }

  // AddPropertyImages(propimages : any , id :number) : Observable<PropertyImages[]>{
  //   return this.http.post<PropertyImages[]>(`${environment.apiUrl}/api/PropertyImage/AddPropertyImages/${id}` , propimages, this.headers)
  // }
  AddPropertyImages(propimages : any , id :number){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const formData: FormData = new FormData();

    for (let index = 0; index < propimages.length; index++) {
      formData.append('image'+index,propimages[index] , propimages[index].name);
    }
    console.log(formData)

    return this.http.post(`${environment.apiUrl}/api/PropertyImage/AddPropertyImages/${id}` , formData ,{headers :headers });

  }

}
