import { Component, OnInit } from '@angular/core';
import { PropertyService } from './../../../Services/property.service';
import { ActivatedRoute, Router } from '@angular/router';   
import { Property } from 'src/app/Modules/property';
import { PersonalInfoService } from './../../../Services/personal-info.service';
import { PropertyImagesService } from 'src/app/Services/property-images.service';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  constructor(public probertyserv: PropertyService,private route : ActivatedRoute,public _router:Router,public info:PersonalInfoService
    
    ,public img:PropertyImagesService){}

  telphone:string="0101155555";
  imgs !: any[];
  twoimgs !: any[]
   propertydetails:any;
   userinfo:any;
  isReadMore = true;
  propId :number = 0;
  startDate! :Date;
  endDate! :Date;
  

  showText() {
     this.isReadMore = !this.isReadMore
    
  }
trylog(){
  
}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
        let id = params['id'];
        this.propId =id;
        this.probertyserv.GetProperty(id).subscribe(a=>{ console.log(a)
        this.propertydetails = a ;
        console.log(this.propertydetails)
        })

        this.img.GetPropertyimages(id).subscribe(a=>{ console.log(a)
        this.imgs = a ;
        this.twoimgs = this.imgs.slice(0,2)
        console.log(this.twoimgs,"two imgs")
        }) 
  })
  this.info.GetPersonalInfo().subscribe(a=>{console.log(a)
  this.userinfo = a ;})
  

    
    // `${environment.apiUrl}/images/property/${this.userData.image}`
this.trylog()

}

MakeReservation(){

    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    const utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const utc2 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const dateDiff = Math.floor((utc2 - utc1) / _MS_PER_DAY);
    console.log(`${this.propId},${this.startDate},${this.endDate}, ${dateDiff}`);
    this._router.navigateByUrl(`/pay?propId=${this.propId}&startDate=${this.startDate}&endDate=${this.endDate}&dateDiff=${dateDiff}`);
}

dateDiffInDays(a:Date, b:Date) {
  // Discard the time and time-zone information.

  return 
}

}
