import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/app/Modules/DTO/RegisterDto';
import { GlobalService } from 'src/app/Services/global.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _globalService:GlobalService , private notifier:NotifierService, private router: Router) { }

  newUser : RegisterDto = new RegisterDto();
  countires: any ;

  ngOnInit(): void {
    this.countires = ["Egypt" , "United Status" , "England" , "Spanish" , "Germany" , "Palastine"];
  }

  Register(confirmPassword : string){
    if(this.newUser.fname == undefined || this.newUser.lname == undefined || this.newUser.email == undefined || this.newUser.phoneNumber == undefined || this.newUser.country ==undefined || this.newUser.country == "-1" || this.newUser.city ==undefined){
      this.notifier.notify('warning','Please fill All Fields.');
      return;
    }
     if(this.newUser.password != confirmPassword){
        this.notifier.notify('error','Passowrd and confirmation password does not match');
     }
     else{
        this._globalService.Register(this.newUser).subscribe(
          (data:any)=>{
            console.log(data);
            if(data.succeeded){
              this.notifier.notify('success','Account Created Successfuly');
              this.router.navigateByUrl('account/login');
            }
            else{
              data.errors.forEach((e :any) => {
                this.notifier.notify('error',`${e.description}`);
              });
            }
          } ,
          (error)=> {
            this.notifier.notify('error','Account Was Not Created , Something went wrong');
            console.log(error);
          }
        );
     }
  }

}
