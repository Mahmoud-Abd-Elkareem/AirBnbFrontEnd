import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  constructor() { }

  guest :any[] =[
    {value:1 , name:"1guest" },
    {value:2 , name:"2guest" },
    {value:3 , name:"3guest" },
    {value:4 , name:"4guest" },
    {value:5 , name:"5guest" }
  ]
 Price : number = 0;
 selectedOption : any = 0;



  ngOnInit(): void {
    this.Price=this.selectedOption.value *123;
  }

}
