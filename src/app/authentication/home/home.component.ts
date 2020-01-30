import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService,private router: Router) { }

  login(){
    //Just added because the angle tag is not working
    this.router.navigate(["/login"]);
  }
}
