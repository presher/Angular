import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MembersComponent } from './members.component';

import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { By } from 'protractor';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembersComponent],
      imports: [HttpClientModule, RouterModule],
      providers: [
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
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MembersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('paragraph tag should be Welcome', async(() => {
    const fixture = TestBed.createComponent(MembersComponent);
    fixture.detectChanges();
    const p = fixture.debugElement.nativeElement.querySelector(By.css('p'))!;
    expect(p.text).toEqual('Welcome')
  }))
  it('should show logout here', async(() => {
    const fixture = TestBed.createComponent(MembersComponent);
    fixture.detectChanges();
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const span = bannerEl.querySelector('span')!;
    expect(span.textContent).toEqual('logout here')
  }));
  it('button text should be Add Member', async(() => {
    const fixture = TestBed.createComponent(MembersComponent);
    fixture.detectChanges();
    const btn = fixture.debugElement.nativeElement.querySelector('#addMemberButton');
    expect(btn.value).toContain('Add Member');
  }))

  it('Add memeber button is clickable one time', async() => {
        document.getElementById('addMemberButton').click();
        expect(component.goToAddMemberForm()).toHaveBeenCalledTimes(1);
  });
  it('Members table tr[1] to have text as Member ID', async(() => {
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('/html/body/app-root/app-members/div/table/thead/tr/th[1]');
    expect(table.textContent).toEqual('Member ID')
  }))
  it('Members table tr[2] to have text as First Name', async(() => {
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('/html/body/app-root/app-members/div/table/thead/tr/th[2]');
    expect(table.textContent).toEqual('First Name')
  }))
  it('Members table tr[3] to have text as Last Name', async(() => {
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('/html/body/app-root/app-members/div/table/thead/tr/th[3]');
    expect(table.textContent).toEqual('Last Name')
  }))
  it('Members table tr[4] to have text as Job Title', async(() => {
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('/html/body/app-root/app-members/div/table/thead/tr/th[4]');
    expect(table.textContent).toEqual('Job Title')
  }))
  it('Members table tr[5] to have text as Racing Team', async(() => {
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('/html/body/app-root/app-members/div/table/thead/tr/th[5]');
    expect(table.textContent).toEqual('Racing Team')
  }))
  it('Members table tr[6] to have text as Status', async(() => {
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('/html/body/app-root/app-members/div/table/thead/tr/th[6]');
    expect(table.textContent).toEqual('Status')
  }))
});
