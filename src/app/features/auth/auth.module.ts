import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
