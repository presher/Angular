import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { AppService } from './app.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {ROUTES} from './app.module'
// import {LoginComponent} from './login/login.component';
// import {MembersComponent} from './members/members.component';
// import {MemberDetailsComponent} from './member-details/member-details.component';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

describe('Router: App', () => {

  let location : Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(ROUTES)]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent)
    
  });

  router.initialNavigation();

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('navigate to "" redirects to /login', async() => {
    await router.navigate(['']);
    tick();
    expect(location.pathname).toBe('/login');
  });
});
