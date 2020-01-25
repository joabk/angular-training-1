import { AbstractControl,ValidationErrors } from '@angular/forms';

export class UsernameValidators{
  cannotContainSpaces(control: AbstractControl): ValidationErrors | null{
    let value: string = control.value;
    if(value.indexOf(' ')>=0){
      return {cannotContainSpaces: true}
    }
  }
}