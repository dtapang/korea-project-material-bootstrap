import { Injectable } from '@angular/core';
import {decode} from 'jwt-decode/lib';
import {HttpClient, HttpResponse, HttpHeaders, HttpBackend} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = "http://localhost:8080/korea";

loginPath: string = "/auth/login";
signupPath: string = "/auth/signup";
logoutPath: string = "/logout";

  constructor(
        private handler: HttpBackend,
        private http: HttpClient
  ) { 
    this.http = new HttpClient(this.handler);
  }
  options = {

      observe: "response" as 'body', // to display the full response & as 'body' for type cast
  };

  loginUser(user: User):Observable<any>{
    /**
     * psasing the credentials  from form towards the servers
     */
    return this.http.post(`${this.url}${this.loginPath}`, user,
     {
        observe: 'response'
    }
    );
  }

  // register a user
  signupUser(user:User):Observable<any>{
    return this.http.post(`${this.url}${this.signupPath}`, user , this.options);
  }

  setToken( token: string ){
    localStorage.setItem('token', token );
  }

  logout(){
     localStorage.removeItem('token');
  }

  // check if the user is log in or not
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();

    if(!!this.loggedIn()){
      return false;
    }else{
      // return a boolean reflecting 
      // whether or not the token is expired
      return decode.tokenNotExpired(null, token);
    }
  }
}