import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubProfileService extends DataService {
  constructor(url,http: Http) {
    super(url, http);
   }
}
