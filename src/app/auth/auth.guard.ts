import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { } 

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isAuthenticated().pipe(map((response: { authenticated: boolean}) => {
        console.log('res', response)
          if (response.authenticated) {
              return true;
          }
          this.router.navigate(['members']);
          return false;
      }), catchError((error) => {
          this.router.navigate(['login']);
          return of(false);
      }));
  }
  
}
