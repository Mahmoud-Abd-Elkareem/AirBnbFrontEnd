import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  search(){
    this.homeserve.GetByCity().subscribe(
      a=>console.log(a),
      e=>console.log(e)
    )
}
// mystring:string | undefined;

// onSubmit(mystring:string) {
//   console.log(mystring);
// }
// fleixble(){
//   this.homeserve.GetByCity()
// }

  constructor(public homeserve:HomeService ,public ar:ActivatedRoute) { }

  ngOnInit(): void {
  this.homeserve.GetByCity().subscribe(
    a=>{this.city=a;console.log(a)}
  )
  }
}
