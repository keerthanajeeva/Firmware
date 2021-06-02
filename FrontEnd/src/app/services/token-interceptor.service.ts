import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent } from '@angular/common/http';
import {AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor {
  private _loginUrl = "https://identity.trimble.com/token?grant_type=client_credentials"
  constructor(private authenticationService: AuthenticationService){
  }
  intercept(request, next): Observable<HttpEvent<any>> {
    const access_token = localStorage.getItem('token');
    let userdetails = localStorage.getItem('user');
    userdetails = JSON.parse(userdetails)
    // let authService = this.injector.get(AuthenticationService)
    const user = this.authenticationService.userValue;
    const isLoggedIn = user && userdetails['authdata'];
    const isApiUrl = request.url.startsWith(`${environment._loginStg}`);
    if (isLoggedIn && !isApiUrl) {
  
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${access_token}`
            }
        });
    }

    return next.handle(request);
}
  }
