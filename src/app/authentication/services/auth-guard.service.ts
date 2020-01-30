import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot){
    if(this.authService.isLoggedIn) return true;

    this.router.navigate(['/'],{queryParams: {returnUrl: state.url}});
    return false;
  }

}