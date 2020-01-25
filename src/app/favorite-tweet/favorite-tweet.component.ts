import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-tweet',
  templateUrl: './favorite-tweet.component.html',
  styleUrls: ['./favorite-tweet.component.css']
})
export class FavoriteTweetComponent implements OnInit {

  constructor() { }
  isFavorite:boolean;
  likes;
  onClick(){
    this.likes += this.isFavorite?-1:1;
    this.isFavorite = !this.isFavorite;
    
  }
  ngOnInit() {
  }

}
