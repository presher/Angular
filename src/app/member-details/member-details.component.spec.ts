import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailsComponent } from './member-details.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

// Bonus points!
describe('MemberDetailsComponent', () => {
  let component: MemberDetailsComponent;
  let fixture: ComponentFixture<MemberDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDetailsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
      ],
      providers: [
        HttpClient,
        FormBuilder,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('title should have text Add Member to Racing Team', () => {
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('h3').textContent).toContain('Add Member to Racing Team');
  });

  it('Input 1 should have text First Name in placeHolder', async() => {
    let input = fixture.debugElement.nativeElement.querySelector('#firstName');
    console.log('input', input)
    expect(input.value).toBeTruthy();
  });
});
