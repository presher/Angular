import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      providers: [AuthGuard, HttpClient, {
        provide: Router,
        useClass: class {
          navigate = jasmine.createSpy('navigate');
        }
      }]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
