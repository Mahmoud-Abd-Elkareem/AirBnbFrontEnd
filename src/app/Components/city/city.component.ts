import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Modules/property';
import { PropertyService } from 'src/app/Services/property.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  prop: Property = new Property(1,"1","1",1,"","","",1,1,1,"","","","","",1);
  properties ?: Property[] ;

  constructor(public Propertyserv:PropertyService) { }

  ngOnInit(): void {
    this.Propertyserv.GetPropertybycity(this.prop).subscribe(a=>this.properties=a)
  }
}
