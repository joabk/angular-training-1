import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: Http, authHttp:AuthHttp) {
  }

  getOrders() { 

    return this.http.get('/api/orders')
      .map(response => response.json());

    /*
    If you are ujsing standar HTTP
    let headers = new Headers();

    let token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({ headers: headers});

    return this.http.get('/api/orders', options)
      .map(response => response.json());*/
  }
}
