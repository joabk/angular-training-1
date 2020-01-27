import { Component, OnInit } from '@angular/core';
import { PostService } from './../common/services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  
  
  constructor( private service:PostService) {

   }

  ngOnInit() {
    this.service.getPosts()
      .subscribe((response)=>{
        this.posts = response.json();
        //console.log(this.posts);
      })
  }

  createPost(input: HTMLInputElement){
    let post = { title:input.value}
    input.value = '';
    this.service.createPost(input)
      .subscribe((response)=>{
        post['id'] = response.json().id;
        this.posts.splice(0,0,post);
      });
  }

  updatePost(post){
    let random = this.randomIntFromInterval(1,2);
    this.service.updatePost(post)
      .subscribe((response)=>{
        let index = this.posts.indexOf(post);

        if(random === 1)
          post.title = post.title.substr(0,post.title.length-1);
        else
          post.title = 'u'+post.title;

        this.posts.splice(index,1, post);
      })
  }
  
  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  deletePost(post){    
    this.service.deletePost(post.id)
      .subscribe((response)=>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      })
  }

}