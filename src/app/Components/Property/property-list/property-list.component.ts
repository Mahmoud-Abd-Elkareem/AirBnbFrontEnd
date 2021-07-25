import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Modules/property';
import { PropertyService } from 'src/app/Services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {


  prop: Property = new Property(1,1,1,"","","",1,1,1,"","","","","",1);
  properties ?: Property[] ;


  constructor(public Propertyserv:PropertyService) { }

  ngOnInit(): void {
    this.Propertyserv.GetAllProperty().subscribe(a=>this.properties=a)
    if(!navigator.geolocation){
      console.log("location is not supported")
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log('lat :'+(position.coords.latitude)+'lan:'+(position.coords.longitude))
    })
  }


}
