import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { PropertyService } from 'src/app/Services/property.service';
import { Dto } from 'src/app/Modules/DTO/Dto';
import { DtoReservation } from 'src/app/Modules/DTO/DtoReservation';
@Component({
  selector: 'app-pay-confirm',
  templateUrl: './pay-confirm.component.html',
  styleUrls: ['./pay-confirm.component.css']
})
export class PayConfirmComponent implements OnInit {

  propId:string | null ="";
  startDate:string | null ="";
  endDate:string | null ="";
  dateDiff:string | null ="";
  totalPrice:number=0;
  prop: Dto = new Dto();
  reservation: DtoReservation = new DtoReservation();

  constructor(public probertyserv: PropertyService,private notifier:NotifierService) {


};

  ngOnInit(): void {

    this.propId = new URLSearchParams (window.location.search).get('propId');
    this.startDate = new URLSearchParams (window.location.search).get('startDate');
    this.endDate = new URLSearchParams (window.location.search).get('endDate');
    this.dateDiff = new URLSearchParams (window.location.search).get('dateDiff');
    
    if (this.propId != "" && this.startDate != "" && this.endDate != ""){
      this.notifier.notify('success',` all data exist , ${this.propId}`);
    }

    this.probertyserv.GetProperty(Number(this.propId)).subscribe(
      (a:any)=>{
        this.notifier.notify('success',' property are loadded successfuly');
        this.prop = a; 
        this.totalPrice = this.prop.propertyPricePerNight * Number(this.dateDiff);
        console.log(this.prop);  
      },
      e=>{
        console.log(e);
        this.notifier.notify('error','faild to get the property, Something went wrong');
      });
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


  makeReservation(){
    this.reservation.propertyID = Number(this.propId);
    this.reservation.userID= this.prop.user.id;
    if(this.startDate != null){
      this.reservation.reservationSartDate = new Date(this.startDate);
    }
    if(this.endDate != null){
      this.reservation.reservationEndDate = new Date(this.endDate);
    }
    this.reservation.totalPrice = this.totalPrice;

    this.probertyserv.makeReservation(this.reservation).subscribe(
      (a)=> {
        this.notifier.notify('success',' Reservation Done successfuly');
      },
      (error)=>{
        this.notifier.notify('error','faild to make the reservation, Something went wrong');
      }
    );

  }







}
