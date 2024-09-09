import { Component } from '@angular/core';
import { Login } from '../models/login.model';
import { SignUp } from '../models/signup.model';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss',
})
export class LoginSignupComponent {
  login: Login 
  signup: SignUp
  constructor(){
    this.login=new Login("","",false)
    this.signup=new SignUp("","","","",false)
  }
  showLogin:boolean=true
  cambiarLoginsignup(){
    this.showLogin=!this.showLogin
  }
}
