import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from  'rxjs/operators'

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
  }

  isLoggedIn() { 
    return false;
  }
}

