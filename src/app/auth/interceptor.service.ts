import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable(
  // {
  // providedIn: 'root'
// }
)
export class InterceptorService implements HttpInterceptor {

  constructor( private  authentication: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authentication.getToken() || "";
    const addHeaders= req.clone({ 
      headers: req.headers
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
   });
   return next.handle(addHeaders);

  };
}
