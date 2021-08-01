import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  telphone:string="0101155555";
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
    
  }
trylog(){
  console.log("hey")
}
  constructor() { }

  ngOnInit(): void {
  }

}
