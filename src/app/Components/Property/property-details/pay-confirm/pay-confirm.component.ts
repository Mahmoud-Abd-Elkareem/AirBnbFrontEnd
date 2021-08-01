import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
@Component({
  selector: 'app-pay-confirm',
  templateUrl: './pay-confirm.component.html',
  styleUrls: ['./pay-confirm.component.css']
})
export class PayConfirmComponent implements OnInit {

  constructor() {


};

  ngOnInit(): void {
  }
  message="hello"
  flag=true

  changeFlag(){
    this.flag=!this.flag;
    if(this.flag==false)
    (document.querySelector('.sticky-top') as HTMLElement).style.height='416px';
    else
    (document.querySelector('.sticky-top') as HTMLElement).style.height='550px';


  }
  sayHi(){
    alert(this.flag)
  }
  changeColor(){

      (document.querySelector('.pays-para') as HTMLElement).style.backgroundColor = 'red';

  }










}
