import { ErrorHandler } from '@angular/core';

import { AppError } from './app-error'

export class AppErrorHandler implements ErrorHandler{
  //constructor(public error:){}
  handleError(error){
    alert('An unexpected error occurred');
    console.log('Error handled by app error handler ',error);
  }
}