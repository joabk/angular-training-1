import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupFormComponent  } from './signup-form/signup-form.component';
import { NewCoursesFormComponent } from './new-courses-form/new-courses-form.component';
import { PostsComponent } from './posts/posts.component'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    SignupFormComponent,
    NewCoursesFormComponent,
    PostsComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
