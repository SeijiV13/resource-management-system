import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path: "",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "verify-email",
    component: VerifyemailComponent
  },
  {
    path: "forgot-password",
    component: ForgotpasswordComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
