export class UpdatePasswordDto {
    email!:String;
    currentPassword!:string;
    newPassword!:string;
    ConfirmNewPassword!:string
}