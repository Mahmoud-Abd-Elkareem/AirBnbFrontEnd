import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { Property } from 'src/app/Modules/property';
import { PropertyImages } from 'src/app/Modules/property-images';
import { PropertyImagesService } from 'src/app/Services/property-images.service';
import { PropertyService } from 'src/app/Services/property.service';
import {Dto} from 'src/app/Modules/DTO/Dto';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-nearby-property',
  templateUrl: './nearby-property.component.html',
  styleUrls: ['./nearby-property.component.css']
})
export class NearbyPropertyComponent implements OnInit {

  allprops:any;
  cityprops!:any[];
  propList:any;
  
  getallproperties(){

    this.Propertyserv.Getallprops().subscribe(
      a=>{console.log(a);
      let x =a.filter(item=>item.City=="kerk");
      let y =x.filter(item => item.PropertyID== 10);
      console.log(x);
      console.log(y);
      this.allprops= x;

      },
      e=>console.log(e)
    )
}

  constructor(public propertyimgserv : PropertyImagesService , public Propertyserv:PropertyService, private notifier:NotifierService) { }

  prop : PropertyImages = new PropertyImages (1,"")
  propimgs !: PropertyImages[]
  propert: Property = new Property(1,"","",1,"","",1,1,1,1,"","","","","",1);
  properties !: Property[] ;

  page : number = 1;
  pageSize : number = 2;

  options: any;

  map!: google.maps.Map;
  infoWindow: any = new google.maps.InfoWindow({
    content: 'Hi'
  });;

  setMap(event:any) {
      this.map = event.map;
  }

 overlays : google.maps.Marker[] =[];

 ngOnInit(): void {
  this.Propertyserv.getPropertList().subscribe(
    (a)=>{
      this.notifier.notify('success','all properties are loadded successfuly');
      console.log(a);
      this.allprops = a;
    },
    e=>{
      console.log(e);
      this.notifier.notify('error','faild to get the all properties, Something went wrong');
    }
  )



  const iconBase =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    let bounds = new google.maps.LatLngBounds();
    this.propertyimgserv.GetPropertyimages(this.prop.PropertId).subscribe(a=>this.propimgs=a)
   this.Propertyserv.Getallprops().subscribe(a =>
    {
        this.properties = a;
        this.properties.forEach(prop=>{
          this.overlays.push(new google.maps.Marker(
            {
              position: { lat :  parseFloat(prop.Propertylatitude ) , lng: parseFloat(prop.PropertyLongitude)},
              title : prop.PropertyDescription ,
                icon: iconBase + "info-i_maps.png",
            }
            )
            )
        });
      // ... extend bounds
      this.overlays.forEach(marker => {
        bounds.extend(marker.getPosition());
    });

    setTimeout(()=> { // map will need some time to load
        this.map.fitBounds(bounds); // Map object used directly
    }, 1000);

    });

    }
    handleOverlayClick(event : any) {

      let isMarker = event.overlay.getTitle != undefined;

      if (isMarker) {
          let title = event.overlay.getTitle();
          this.infoWindow.setContent('' + title + '');
          this.infoWindow.open(event.map, event.overlay);
          event.map.setCenter(event.overlay.getPosition());
      }
  }

  getpropertiesbypage(){
    // this.properties.Skip((Page - 1) * PageSize).Take(PageSize)
    let strt = (this.page - 1) * this.pageSize ;
    this.properties.slice(strt,strt+this.pageSize);
  }

}
