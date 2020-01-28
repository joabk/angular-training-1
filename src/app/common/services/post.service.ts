import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpDataService } from './http.data.service';


@Injectable()
export class PostService extends HttpDataService{
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }

}