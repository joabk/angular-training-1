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
    this.posts.splice(0,0,post);

    input.value = '';

    this.service.create(input)
      .subscribe(
        (newPost)=>{
          post['id'] = newPost.id;          
        }, 
        (error: AppError )=>{
          this.posts.splice(0,1);
          if(error instanceof BadRequestError){
              //this.form.setErrors(error.originalError);
          }else{
            throw error;
          }
        });
  }

  updatePost(post){
    let index = this.posts.indexOf(post);
    let random = this.randomIntFromInterval(1,2);
    let newpost = post;
    if(random === 1)
      newpost.title = newpost.title.substr(0,newpost.title.length-1);
    else
      newpost.title = 'u'+newpost.title;
    
    this.posts.splice(index,1, newpost);

    this.service.update(post)
      .subscribe((updatedPost)=>{        
        console.log('Updated post', updatedPost);
      }, 
      (error: AppError)=>{
        this.posts.splice(index,1,post);
        if(error instanceof BadRequestError){
          //this.form.setErrors(error.originalError);
        }else throw error;    
      })
  }
  
  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)
      .subscribe(
        null,
        (error:AppError)=>{
          this.posts.splice(index,0, post);
          if(error instanceof NotFoundError)
            alert('This post has already been deleted')
          else {
            throw error;
          }            
        })
  }

}