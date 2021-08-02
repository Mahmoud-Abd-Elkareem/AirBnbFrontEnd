import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Property } from 'src/app/Modules/property';
import { PropertyService } from 'src/app/Services/property.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {

  prop: Property = new Property(1,"","",1,"","","",1,1,1,"","","","","",1);

  constructor(public propertyserv : PropertyService , public userserve : UserService ) { }

  options: any;

    overlays!: any[];

    dialogVisible!: boolean;

    markerTitle!: string;

    selectedPosition: any;

    infoWindow: any;

    draggable!: boolean;
    saveprop(){
      this.prop.Propertylatitude=this.selectedPosition.lat()
      this.prop.PropertyLongitude=this.selectedPosition.lng()
      console.log(this.prop)
    }
  ngOnInit(): void {

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

    this.propertyserv.AddProperty(this.prop).subscribe(a=>console.log(a));


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


