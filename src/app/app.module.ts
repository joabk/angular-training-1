import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupFormComponent  } from './signup-form/signup-form.component'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    SignupFormComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
