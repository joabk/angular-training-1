import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupFormComponent  } from './signup-form/signup-form.component';
import { NewCoursesFormComponent } from './new-courses-form/new-courses-form.component'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    SignupFormComponent,
    NewCoursesFormComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
