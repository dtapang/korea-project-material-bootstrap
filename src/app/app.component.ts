import { Component, Injectable} from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}

@Injectable()
export class UserService {
  isLoggedIn(): boolean {
    return false;
  }
}

@Injectable()
 export class OnlyLoggedInUserGuard implements CanActivate {

  constructor(private authService: AuthenticationService) {
   };

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page"); (4)
      return false;
    }
  }
}
