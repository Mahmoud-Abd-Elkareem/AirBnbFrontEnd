import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { PropertyImagesService } from 'src/app/Services/property-images.service';
import { PropertyService } from 'src/app/Services/property.service';

@Component({
  selector: 'app-add-property-images',
  templateUrl: './add-property-images.component.html',
  styleUrls: ['./add-property-images.component.css']
})
export class AddPropertyImagesComponent implements OnInit {
  urlSources : any |string [] | ArrayBuffer[] | null []= [] ;
  newProfileImage!: string;
  DisplayedImageUrl!: string | ArrayBuffer | null ;
  DisplayedImageUrl2!: string | ArrayBuffer | null ;
  constructor(private activateRoute : ActivatedRoute ,private notifier:NotifierService , private images: PropertyImagesService , private property :PropertyService) { }

 filenames : string[] = [];
  propId : number= 0;
  ngOnInit(): void {
    this.activateRoute.params.subscribe( queryString => this.propId = queryString['id'] )
    console.log(this.propId);
  }

  Addpropertyimages(Inputfile:any){
    console.log(this.propId);
    if(Inputfile.files.length > 0){

    let propertyImages =Inputfile.files;
    this.images.AddPropertyImages(propertyImages, this.propId).subscribe(
      (data:any) => {
        console.log(data);
        if(data!=0){
          this.notifier.notify('success','Property Images Updated Successfuly');
        }
        else{

            this.notifier.notify('error', 'You didnt successed');
        }
      },
      error => {
        this.notifier.notify('error','faild to add images to property, Something went wrong');
        console.log(error);
      }
    );

  }

  else{
    this.notifier.notify('warning','Please select an image');
  }

}

  onImageChange(files:any){
    console.log(files);
    console.log(files.target.files);
    for (let index = 0; index < files.target.files.length; index++) {
      this.filenames.push(files.target.files[index].name) ;
      console.log(files.target.files[index].name);
    }
  }

}
