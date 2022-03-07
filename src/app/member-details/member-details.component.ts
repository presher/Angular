import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

// This interface may be useful in the times ahead...
interface Member {
  firstName: string;
  lastName: string;
  jobTitle: string;
  team: string;
  status: string;
}

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit, OnChanges {
  
  memberModel: Member;
  memberForm: FormGroup;
  submitted = false;
  alertType: String;
  alertMessage: String;
  teams = [];

  constructor(private fb: FormBuilder, private appService: AppService, private router: Router) {}
  
  ngOnInit() {
    this.memberForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      team: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required)
    })
    this.appService.getTeams().subscribe(teams => (this.teams = teams));
  }


  ngOnChanges() {}

  // TODO: Add member to members
  onSubmit() {
    this.submitted = true;
    this.appService.addMember(this.memberForm.value).subscribe();
    this.router.navigate(['/', 'members']);
  }
  cancel(){
    this.router.navigate(['/', 'members']);
  }
}
