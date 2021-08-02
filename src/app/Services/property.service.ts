import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Property } from 'src/app/Modules/property';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
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

    AddProperty(prop:Property) : Observable<Property>{
      return this.http.post<Property>("http://localhost:3000/property",prop)
    }

    EditProperty(prop:Property) : Observable<Property>{

      return this.http.put<Property>("http://localhost:3000/property/"+prop.PropertyID+"/"+prop.PropertyHostID,prop,httpOptions)
    }

  constructor(private http:HttpClient) { }
}
