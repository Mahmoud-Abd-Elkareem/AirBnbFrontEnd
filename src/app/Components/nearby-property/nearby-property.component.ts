import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Modules/property';
import { PropertyImages } from 'src/app/Modules/property-images';
import { PropertyImagesService } from 'src/app/Services/property-images.service';
import { PropertyService } from 'src/app/Services/property.service';

@Component({
  selector: 'app-nearby-property',
  templateUrl: './nearby-property.component.html',
  styleUrls: ['./nearby-property.component.css']
})
export class NearbyPropertyComponent implements OnInit {

  constructor(public propertyimgserv : PropertyImagesService , public Propertyserv:PropertyService) { }

  prop : PropertyImages = new PropertyImages (1,"")
  propimgs ?: PropertyImages[]
  propert: Property = new Property(1,1,1,"","","",1,1,1,"","","","","",1);
  properties ?: Property[] ;






  ngOnInit(): void {
    this.propertyimgserv.GetPropertyimages(this.prop.PropertId).subscribe(a=>this.propimgs=a)
    this.Propertyserv.GetAllProperty().subscribe(a=>this.properties=a)
  }

}
