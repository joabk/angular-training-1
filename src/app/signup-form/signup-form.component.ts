import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators.ts'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpaces,
      UsernameValidators.shouldBeUnique
    ]),
    password: new FormControl('',Validators.required)

  })

  onKeyup(x){
    console.log(x);
  }
  
  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }
}
