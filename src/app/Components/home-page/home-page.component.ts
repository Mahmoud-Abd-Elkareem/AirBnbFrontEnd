import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Property } from 'src/app/Modules/property';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

  template:` <app-landing-page-navbar-component></app-landing-page-navbar-component>`
})
export class HomePageComponent implements OnInit {
  
  city:Property[]=[];

  constructor(public homeserve:HomeService ,public _router:Router) { }

  ngOnInit(): void {
    this.homeserve.GetByCity().subscribe(
      a=>{
        this.city=a;
        console.log(a);
      }
    );
  }

  search(location:any , min:any , max:any ){
    console.log(`${location},${min},${max}`);
    this._router.navigateByUrl(`/nearbyprop?location=${location}&min=${min}&max=${max}`);
  }

}
