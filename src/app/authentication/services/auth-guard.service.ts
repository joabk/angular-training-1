import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(){
    if(this.authService.isLoggedIn) return true;

    this.router.navigate(['/'],{queryParam:{returnUrl:home}});
    return false;
  }

}