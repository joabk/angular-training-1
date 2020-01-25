import { AbstractControl,ValidationErrors } from '@angular/forms';

export class UsernameValidators{
  static cannotContainSpaces(control: AbstractControl): ValidationErrors | null{
    let value: string = control.value;
    if(value.indexOf(' ')>=0){
      return {cannotContainSpaces: true }
    return null;

    }
  }

  static shouldBeUnique(control: AbstractControl ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value == 'Mosh')
          resolve({shouldBeUnique:{invalid: true, currentValue: control.value}});      
        else
          resolve(null);
      },2000)
      
    })
    /*
    
    */
  }
}