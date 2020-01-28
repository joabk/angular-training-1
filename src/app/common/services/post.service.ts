import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
//import { Observable } from 'rxjs/observable'
import { AppError } from './../errors/app-error';
import { NotFoundError } from './../errors/not-found-error';
import { BadRequestError } from './../errors/bad-request-error'


@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url,JSON.stringify(post))
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id ,JSON.stringify(post))
    .pipe(
      catchError(this.handleError)
    );
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:Response){
    if(error.status === 404)
          return throwError(new NotFoundError())
    else if(error.status === 400)
          return throwError(new BadRequestError(error));
    else{
      console.log('Handle and rethrowing ...', error);
      return throwError(new AppError(error));
    }
  }

}