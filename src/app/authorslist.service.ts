import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorslistService {

  constructor() { }
  _authors = [
    {id: 1, name:"author1"},
    {id: 2, name:"author2"},
    {id: 3, name:"author3"}
  ]
  get authors(){
    return this.authors;
  }
}
