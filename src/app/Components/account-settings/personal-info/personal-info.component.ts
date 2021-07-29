import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/app/Modules/DTO/RegisterDto';
import { UpdatePasswordDto } from 'src/app/Modules/DTO//UpdatePasswordDTO';
import { User } from 'src/app/Modules/user';
import { FormControl } from '@angular/forms';
import { PersonalInfoService } from 'src/app/Services/personal-info.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private _personalInfoService : PersonalInfoService) { }

  userInfo: RegisterDto = new RegisterDto();
  userSecurityInfo: UpdatePasswordDto = new UpdatePasswordDto();

  genders: any ;
  countires: any ;
  selectedGender!: number;

  ngOnInit(): void {
    
    this.genders = [
      {name: 'Male', value: '0'},
      {name: 'Female', value: '1'}
    ];

    this.countires = ["Egypt" , "United Status" , "England" , "Spanish" , "Germany" , "Palastine"];
  }

  UpdatePersonalInfo(){
    console.log(this.userInfo);
    this._personalInfoService.UpdatePersonalInfo(this.userInfo);
  }

  UpdatePassword(confirmPassword:string){

    if (this.userSecurityInfo.newPassword.trim() !="" && this.userSecurityInfo.newPassword != null) {
      
      if(this.userSecurityInfo.newPassword == confirmPassword){
        alert("New Password And Confirmation password are equal");
        this._personalInfoService.UpdatePassword(this.userSecurityInfo);
      }
      else{
        alert("New Password And Confirmation password are not equal");
      }

    }

  }
  
}
