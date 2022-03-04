import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'softrams-racing';

  MemberForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    status: new FormControl(''),
    team: new FormControl(''),
    jobTitle: new FormControl('')
  })

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    if (!this.appService.username || this.appService.username.length < 1) {
      this.appService.setUsername(localStorage.getItem('username'));
    }
  }
}
