import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Property } from 'src/app/Modules/property';
import { environment } from 'src/environments/environment';
import { Propertyregistration } from '../Modules/propertyregistration';



@Injectable({
  providedIn: 'root'
})

export class PropertyService {

  token : string  | null = environment.autho_token_value;



    private apiprop ='http://localhost:5000/property'
    // GetAllProperty() : Observable<Property[]>{
    //   return this.http.get<Property[]>("http://localhost:3000/property");
    // }
    Url="https://localhost:44351/api/Property";

    Getallprops():Observable<any[]>| any{
      return this.http.get<Property[]>(this.Url)
    }

    getPropertList(){
      return this.http.get(`${environment.apiUrl}/api/Property`);
    }
    // getPropertyByLocation(location : string){
    //   return this.http.get(`${environment.apiUrl}/api/Property/location/${location}`);
    // }

    GetProperty(id:number){
      return this.http.get("https://localhost:44351/api/Property/"+id)
    }

    GetPropertybycity(prop:Property) : Observable<Property[]>{
      return this.http.get<Property[]>("http://localhost:3000/property/"+prop.City)
    }

    GetPropertybycountry(prop:Property) : Observable<Property[]>{
      return this.http.get<Property[]>("http://localhost:3000/property/"+prop.Country)
    }

    DeleteProperty(id:number) : Observable<Property>{
      return this.http.delete<Property>("http://localhost:3000/property/"+id)
    }

    AddProperty(prop:Propertyregistration) : Observable<Property> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
      console.log(headers)
      return this.http.post<Property>(`${environment.apiUrl}/api/Property/AddProperty`,prop,{headers});
    }

    // EditProperty(prop:Property) : Observable<Property>{

    //   return this.http.put<Property>("http://localhost:3000/property/"+prop.PropertyID+"/"+prop.PropertyHostID,prop,this.headers)
    // }

    makeReservation(reservation:any){
      // const headers = new HttpHeaders({
      //   'Authorization': `Bearer ${this.token}`
      // });
      return this.http.post(`${environment.apiUrl}/api/Reservation`,reservation);
    }

  constructor(private http:HttpClient) { }
}
