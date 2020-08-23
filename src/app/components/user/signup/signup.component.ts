import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from 'app/models/user';
import { Signup } from 'app/models/signup';
import { AuthenticationService } from 'app/auth/authentication.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signup: Signup;

  public user :User = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: ""
  };

  public confirmPassword: string;

  constructor(
    private auth: AuthenticationService,
    private route: Router,
  ) { 
    this.signup = new  Signup();
   }

  ngOnInit(): void {
    
  }

  onClickSubmit(user :User) {
    console.log(user);
    this.auth.signupUser(user).subscribe((res: HttpResponse<any>)  => {
      this.auth.setToken(res.body.jwt);
      this.route.navigate(['/project']);
    },
    err => {
      console.log(err);
    });
  }



}

