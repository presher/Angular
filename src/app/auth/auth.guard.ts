import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service'
import { catchError, map } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private login: LoginComponent, 
    private router: Router) { } 

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isAuthenticated().pipe(map((response: { authenticated: boolean}) => {
        console.log('res', response)
          if (response.authenticated) {
            console.log('true')
              return true;
          }
          console.log('false')
          return false;
      }), catchError((error) => {
          localStorage.removeItem(this.login.loginForm.value.username);
          this.router.navigate(['login']);
          
          return of(false);
      }));
  }
  
}
