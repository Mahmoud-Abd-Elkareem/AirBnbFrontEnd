import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthgurdService implements CanActivate {

  constructor(public r : Router) { }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var token = environment.autho_token_value
    if(token){
      return true
    }else{
      this.r.navigateByUrl('/account/login')
      return false
    }
    return false
  }


}
