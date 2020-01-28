import { ErrorHandler } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from './app-error'

export class AppErrorHandler implements ErrorHandler{
  //constructor(public error:){}
  handleError(error){
    return throwError (new AppError());
          console.log('Error handled by app error handler ',.error);
  }
}