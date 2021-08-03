import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostsuccess',
  templateUrl: './hostsuccess.component.html',
  styleUrls: ['./hostsuccess.component.css']
})
export class HostsuccessComponent implements OnInit {

  constructor(public r : Router) { }

  ngOnInit(): void {
  }
  hostagain(){
    this.r.navigateByUrl("AddProperty");
  }
  homepage(){
    this.r.navigateByUrl("home");
  }

}
