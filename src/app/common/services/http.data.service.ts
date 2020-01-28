import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map,retry, retryWhen,delay, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from './../errors/app-error';
import { NotFoundError } from './../errors/not-found-error';
import { BadRequestError } from './../errors/bad-request-error'


@Injectable()
export class HttpDataService {
  constructor(private url: string, private http: Http) { }

  getData(){
    return this.http.get(this.url)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      )
  }

  create(resource){
    return this.http.post(this.url,JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id ,JSON.stringify(resource))
    .pipe(
      map(resource=>resource.json()),
      catchError(this.handleError)
    );
  }

  delete(id){
    return this.http.delete(this.url + '/' + id).pipe(
      map(resource=>resource.json()),
      //retry(3),
        retryWhen(errors => errors.delay(1000).take(10)),
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