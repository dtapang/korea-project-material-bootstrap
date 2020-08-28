import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { AuthenticationService } from 'app/auth/authentication.service';
import { User } from 'app/models/user';
import { Form } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private route: Router
  ) { }

  public user :User = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: ""
  };

  ngOnInit(): void {
  }

  onClickSubmit(user: User) {
    this.auth.loginUser(user).subscribe( (res: HttpResponse<any>)  => {
          this.auth.setToken(res.body.jwt);
          this.route.navigate(['/project']);//private route: Router
      },
    err => {
      console.log(err);
    });

  }

}
