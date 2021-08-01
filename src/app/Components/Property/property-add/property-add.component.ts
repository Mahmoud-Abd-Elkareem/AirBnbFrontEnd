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


    this.propertyserv.AddProperty(this.prop).subscribe(a=>console.log(a));
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };

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


initOverlays() {
  if (!this.overlays||!this.overlays.length) {
      this.overlays = [
          new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
          new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
          new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
          new google.maps.Polygon({paths: [
              {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
          ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
          }),
          new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
          new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
      ];
  }
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


