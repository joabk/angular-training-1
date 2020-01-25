import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isSelected:boolean;
  totalLikes:number;
  onCLick(){
    this.totalLikes += this.isSelected? 1 : -1;
    this.isSelected = !this.isSelected;
  }
}
