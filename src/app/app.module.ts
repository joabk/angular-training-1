import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, Http } from '@angular/http';
import { RouterModule } from '@angular/router';

// START OF AUTHENTICATION IMPORTS
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { OrderService } from './authentication/services/order.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './authentication/helpers/fake-backend';
import { AuthService } from './authentication/services/auth.service';

import { HomeComponent } from './authentication/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AdminComponent } from './authentication/admin/admin.component';
import { NotFoundComponent } from './authentication/not-found/not-found.component';
import { NoAccessComponent } from './authentication/no-access/no-access.component';
import { NavbarComponent } from './navbar/navbar.component'

// END OF AUTHENTICATION IMPORTS
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupFormComponent  } from './signup-form/signup-form.component';
import { NewCoursesFormComponent } from './new-courses-form/new-courses-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersService } from './services/github/github-followers.service.ts';

import { ComputeService } from './common/services/compute.service';
import { PostService } from './common/services/post.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/errors/app-error-handler'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      //{ path: 'github', component: HomeComponent },
      { 
        path: 'followers/:username', 
        component: GithubProfileComponent 
      },
      { path: 'followers', component: GithubFollowersComponent },      
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    SignupFormComponent,
    NewCoursesFormComponent,
    PostsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NavbarComponent
    ],
  bootstrap: [ AppComponent ],
  providers: [
    ComputeService, 
    PostService,
    GithubFollowersService,
    AuthService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class AppModule { }
