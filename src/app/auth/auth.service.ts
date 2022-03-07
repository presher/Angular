import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private login: LoginComponent) { }
    
    isAuthenticated() {
      console.log(1111111, this.login)
      return this.http.post('/auth/isAuthenticated', this.login.loginDetails)
      .pipe(catchError(this.handleError));;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` + `body was: ${error.error}`
          );
        }
        return [];
      }
}