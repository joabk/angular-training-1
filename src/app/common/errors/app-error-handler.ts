import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
  handleError(){
    return throwError(new AppError(error));
          console.log(error);
  }
}