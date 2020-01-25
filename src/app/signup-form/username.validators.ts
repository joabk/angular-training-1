import { AbstractControl,ValidationErrors } from '@angular/forms';

export class UsernameValidators{
  static cannotContainSpaces(control: AbstractControl): ValidationErrors | null{
    let value: string = control.value;
    if(value.indexOf(' ')>=0){
      return {cannotContainSpaces: true }
    return null;

    }
  }

  static shouldBeUnique(control: AbstractControl ): ValidationErrors | null {
    if(control.value == 'Mosh')
     return { ValidationErrors: true, currentValue: control.value }
    else
      return null;
  }
}