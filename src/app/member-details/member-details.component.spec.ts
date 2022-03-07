import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

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

  it('submit button should not be callable until input fields are filled in', async() => {
    spyOn(component, 'onSubmit');
        document.getElementById('submitMember').click();

        expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });
  
  it('Radio button 1 text should equal Active', async(() => {
    let status = fixture.debugElement.nativeElement.querySelector('#activeStatus > input')
    fixture.detectChanges();
    expect(status.value).toEqual('Active')
    }));
  it('Radio button 2 text should equal Active', async(() => {
    let status = fixture.debugElement.nativeElement.querySelector('body > app-root > app-member-details > div > form > div > div.form-group.col-md-6 > div > label:nth-child(2) > input')
    fixture.detectChanges();
    console.log('status 2', status)
    expect(status.value).toEqual('Inactive');
    }));
});