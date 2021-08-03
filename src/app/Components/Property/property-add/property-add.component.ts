import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/Modules/property';
import { Propertyregistration } from 'src/app/Modules/propertyregistration';
import { PersonalInfoService } from 'src/app/Services/personal-info.service';
import { PropertyService } from 'src/app/Services/property.service';
import { UserService } from 'src/app/Services/user.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {
  userId !: string;
  prop: Propertyregistration = new Propertyregistration("","",1,"","",1,1,1,1,"","","","","",this.userId);

  constructor( private notifier:NotifierService, public propertyserv : PropertyService , public userserve : UserService , public r : Router , private user : PersonalInfoService ) { }

  options: any;

    overlays!: any[];

    dialogVisible!: boolean;

    markerTitle!: string;

    selectedPosition: any;

    infoWindow: any;

    draggable!: boolean;
    saveprop(){
      this.prop.Propertylatitude=this.selectedPosition.lat()
      this.prop.PropertyLongitude=this.selectedPosition.lng();
      if(this.prop.Address=="" ||this.prop.City=="" ||this.prop.Country=="" ||this.prop.PropertyDescription=="" ||this.prop.PropertyLongitude=="" ||this.prop.PropertyName==""
      ||this.prop.PropertyType==""||this.prop.Propertylatitude=="" ||this.prop.UniqueStays=="")
      {
        this.notifier.notify('error','please fill all fields');
        return;
      }
      console.log(this.prop);
      this.propertyserv.AddProperty(this.prop).subscribe(
        a=>{
          console.log(a)
          this.r.navigateByUrl("/addpropertyimages/"+a);
        },
        a=>{
          console.log(a)
        });
      }

  ngOnInit(): void {
    this.user.GetPersonalInfo().subscribe(
      (data :any) => {
        console.log(data)
        this.userId = data.id;
        this.prop.PropertyHostID=this.userId;
      } ,
      erorr => console.log(erorr)
    );

    let bounds = new google.maps.LatLngBounds();
    if(!navigator.geolocation){
      console.log("location is not supported")
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log('lat :'+(position.coords.latitude)+'lan:'+(position.coords.longitude))
        this.overlays = [
            new google.maps.Marker({position: {lat: position.coords.latitude, lng: position.coords.latitude}, title:"current position"}),

        ];

        this.overlays.forEach(marker => {
          bounds.extend(marker.getPosition());
      });

      setTimeout(()=> { // map will need some time to load
          this.map.fitBounds(bounds); // Map object used directly
      }, 1000);

      this.options = {
        center: {lat: position.coords.latitude, lng: position.coords.latitude},
        zoom: 12
    };

    })




  this.initOverlays();

  this.infoWindow = new google.maps.InfoWindow();

}

handleMapClick(event:any) {
  this.dialogVisible = true;
  this.selectedPosition = event.latLng;
}

handleOverlayClick(event:any) {
  let isMarker = event.overlay.getTitle != undefined;

  if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

  }
}

addMarker() {
  this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));
  this.markerTitle = "";
  this.dialogVisible = false;
}

map!: google.maps.Map;

setMap(event:any) {
  this.map = event.map;
}

initOverlays() {



}

zoomIn(map :any) {
  map.setZoom(map.getZoom()+1);
}

zoomOut(map :any) {
  map.setZoom(map.getZoom()-1);
}

clear() {
  this.overlays = [];
}
}


