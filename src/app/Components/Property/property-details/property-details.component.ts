import { Component, OnInit } from '@angular/core';
import { PropertyService } from './../../../Services/property.service';
import { ActivatedRoute } from '@angular/router';   
import { Property } from 'src/app/Modules/property';
import { PersonalInfoService } from './../../../Services/personal-info.service';
import { PropertyImagesService } from 'src/app/Services/property-images.service';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  constructor(public probertyserv: PropertyService,private route : ActivatedRoute,public info:PersonalInfoService
    
    ,public img:PropertyImagesService){}

  telphone:string="0101155555";
  imgs !: any[];
  twoimgs !: any[]
   propertydetails:any;
   userinfo:any;
  isReadMore = true
  

  showText() {
     this.isReadMore = !this.isReadMore
    
  }
trylog(){
  
}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
        let id = params['id'];

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
}
