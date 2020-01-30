import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from  'rxjs/operators'
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map((response)=>{
        //console.log(response);
        let results = response.json();
        if(results && results.token){
          localStorage.setItem('token', results.token);
          return true;
        }

        return false;
      })
  }

  logout() {     
    localStorage.removeItem('token');    
  }

  isLoggedIn() { 
    //return tokenNotExpired();
    let jwtHelper = new JwtHelper();

    let token = localStorage.getItem('token');
    if(token)
      return false;

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    let decodedToken =   new JwtHelper().decodeToken(token);
    console.log(decodedToken);
    return decodedToken;
  }

}

