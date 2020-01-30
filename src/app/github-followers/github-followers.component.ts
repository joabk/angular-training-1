import { GithubFollowersService } from './../services/github/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe((combined)=>{
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        let order = combined[1].get('order');
        //this.service.getAll({id:id,page:page,order:order});
      })

    /*
    this.route.paramMap.subscribe((params)=>{

    });

    this.route.queryParamMap.subscribe((params)=>{
      console.log(` 
          The optional params are ${params.get('page')}
          and  ${params.get('order')}      
      `)
    })
    //Below is just an illustration of how to get the optional params
    this.route.snapshot.queryParamMap.get('page');
    this.route.snapshot.queryParamMap.get('order');
    */
    this.service.getAll('https://api.github.com/users/mosh-hamedani/followers')
      .subscribe(followers => this.followers = followers);
  }
}
