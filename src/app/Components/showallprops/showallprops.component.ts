import { Component, OnInit } from '@angular/core';
import { Dto } from 'src/app/Modules/DTO/Dto';
import { Property } from 'src/app/Modules/property';
import { PropertyService } from 'src/app/Services/property.service';
// import { PropertyService } from 'src/app/Services/property.service';
// import {Dto} from 'src/app/Modules/DTO/Dto';
import { NotifierService } from 'angular-notifier';
import { Dtoimages } from 'src/app/Modules/DTO/Dtoimages';
import { PropertyImagesService } from 'src/app/Services/property-images.service';

@Component({
  selector: 'app-showallprops',
  templateUrl: './showallprops.component.html',
  styleUrls: ['./showallprops.component.css']
})
export class ShowallpropsComponent implements OnInit {

  allprops:Dto[] = [];
  cityprops!:any[];
  propList:any;
  allpropsimages:Dtoimages[]=[];

  // propList:any[] = [{}];
  location:string | null ="";

  // getallproperties(){

  //   this.Propertyserv.getPropertList().subscribe(
  //     (a:any)=>{
  //       this.notifier.notify('success','all properties are loadded successfuly');
  //       // console.log(a);
  //       this.allprops = a;
  //     },
  //     e=>{
  //       console.log(e);
  //       this.notifier.notify('error','faild to get the all properties, Something went wrong');
  //     }
  //   )
  // }


  constructor(public imgservice:PropertyImagesService,public Propertyserv:PropertyService, private notifier:NotifierService) { }

  propert: Property = new Property(1,"","",1,"","",1,1,1,1,"","","","","","1");
  properties !: Property[] ;

  page : number = 1;
  pageSize : number = 2;

  options: any;




 ngOnInit(): void {

  this.imgservice.GetAllPropertyimages().subscribe(
    (data:any)=>{
      this.allpropsimages=data;
      console.log(data);
    },
    e=>{
      console.log(e)
    }
  )


  this.Propertyserv.getPropertList().subscribe(
    (a:any)=>{
      this.notifier.notify('success','all properties are loadded successfuly');
      this.allprops = a;

    },
    e=>{
      console.log(e);
      this.notifier.notify('error','faild to get the all properties, Something went wrong');
    }
  );

  }}

