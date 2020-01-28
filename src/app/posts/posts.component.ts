import { Component, OnInit } from '@angular/core';
import { PostService } from './../common/services/post.service';
import { AppError } from './../common/errors/app-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { BadRequestError } from './../common/errors/bad-request-error'

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
    this.service.getData()
      .subscribe(post=> this.posts= post );
  }

  createPost(input: HTMLInputElement){
    let post = { title:input.value}
    input.value = '';
    this.service.create(input)
      .subscribe(
        (response)=>{
          post['id'] = response.json().id;
          this.posts.splice(0,0,post);
        }, 
        (error: AppError )=>{
          if(error instanceof BadRequestError){
              //this.form.setErrors(error.originalError);
          }else{
            throw error;
          }
        });
  }

  updatePost(post){
    let random = this.randomIntFromInterval(1,2);
    this.service.update(post)
      .subscribe((response)=>{
        let index = this.posts.indexOf(post);

        if(random === 1)
          post.title = post.title.substr(0,post.title.length-1);
        else
          post.title = 'u'+post.title;

        this.posts.splice(index,1, post);
      }, 
      (error: AppError)=>{
        if(error instanceof BadRequestError){
          //this.form.setErrors(error.originalError);
        }else throw error;    
      })
  }
  
  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  deletePost(post){    
    this.service.delete(post.id)
      .subscribe(
        (response)=>{
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        },
        (error:AppError)=>{
          if(error instanceof NotFoundError)
            alert('This post has already been deleted')
          else {
            throw error;
          }            
        })
  }

}