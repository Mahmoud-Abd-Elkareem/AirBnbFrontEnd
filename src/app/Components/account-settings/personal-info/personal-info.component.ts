import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/app/Modules/DTO/RegisterDto';
import { UpdatePasswordDto } from 'src/app/Modules/DTO/UpdatePasswordDto';
import { User } from 'src/app/Modules/user';
import { FormControl } from '@angular/forms';
import { PersonalInfoService } from 'src/app/Services/personal-info.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private _personalInfoService : PersonalInfoService , private notifier:NotifierService) { }

  userInfo: RegisterDto = new RegisterDto();
  userSecurityInfo: UpdatePasswordDto = new UpdatePasswordDto();
  newProfileImage!: string;
  DisplayedImageUrl!: string | ArrayBuffer | null ;
  base64textString :string [] = [];

  genders: any ;
  countires: any ;

  ngOnInit(): void {
    
    this.genders = [
      {name: 'Male', value: '0'},
      {name: 'Female', value: '1'}
    ];
    this.countires = ["Egypt" , "United Status" , "England" , "Spanish" , "Germany" , "Palastine"];
    this.DisplayedImageUrl = "../../../../assets/Images/avatar-image.png";
    this._personalInfoService.GetPersonalInfo().subscribe(
      data => {
        this.userInfo = data as RegisterDto; 
        console.log(data)
      } , 
      erorr => console.log(erorr)
    );

  }

  UpdatePersonalInfo(){
    console.log(this.userInfo);
    this._personalInfoService.UpdatePersonalInfo(this.userInfo).subscribe(
      (data:any) => {
        console.log(data);
        if(data.succeeded){
          this.notifier.notify('success','Updated Successfuly');
        }
        else{
          data.errors.forEach((e :any) => {
            this.notifier.notify('error',`${e.description}`);
          });
        }
      },
      error => {
        this.notifier.notify('error','Update faild , Something went wrong');
        console.log(error);
      }
    );;
  }

  UpdatePassword(){

    if (this.userSecurityInfo.newPassword.trim() !="" && this.userSecurityInfo.newPassword != null) {
      
      if(this.userSecurityInfo.newPassword == this.userSecurityInfo.ConfirmNewPassword){
        this._personalInfoService.UpdatePassword(this.userSecurityInfo).subscribe(
          (data:any) => {
            console.log(data);
            if(data.succeeded){
              this.notifier.notify('success','Password Updated Successfuly');
            }
            else{
              data.errors.forEach((e :any) => {
                this.notifier.notify('error',`${e.description}`);
              });
            }
          },
          error => {
            this.notifier.notify('error','Password Was Not Updated , Something went wrong');
            console.log(error);
          }
        );
      }
      else{
        this.notifier.notify('warning','New Password And Confirmation password are not equal.');
      }

    }

  }

  onImageChange(evt:any , Inputfile:any){
    console.log(evt);
    console.log(evt.target.files[0]);
    console.log(Inputfile.files[0]);

    const file = Inputfile.files[0];
    let reader = new FileReader();
    reader.onload = e => this.DisplayedImageUrl = reader.result;
    reader.readAsDataURL(file);

    // reader.onload=this._handleReaderLoaded.bind(this);
    // reader.readAsBinaryString(evt.target.files[0]);

    // this.newProfileImage = "new image";
    // this.userInfo.image = "new image"

  }

  _handleReaderLoaded(e:any) {
    var binaryString = e.target.result;
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
           console.log(btoa(binaryString));
   }  
}
