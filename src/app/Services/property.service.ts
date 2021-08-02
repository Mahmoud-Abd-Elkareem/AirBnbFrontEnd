import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Property } from 'src/app/Modules/property';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class PropertyService {

  token : string  | null = environment.autho_token_value;



    private apiprop ='http://localhost:5000/property'
    GetAllProperty() : Observable<Property[]>{
      return this.http.get<Property[]>("http://localhost:3000/property");
    }

    GetProperty(id:number) : Observable<Property>{
      return this.http.get<Property>("http://localhost:3000/property/"+id)
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

    AddProperty(prop:Property) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
      return this.http.post(`${environment.apiUrl}/api/Property/AddProperty` , prop,{ headers});
    }

    // EditProperty(prop:Property) : Observable<Property>{

    //   return this.http.put<Property>("http://localhost:3000/property/"+prop.PropertyID+"/"+prop.PropertyHostID,prop,this.headers)
    // }

  constructor(private http:HttpClient) { }
}
