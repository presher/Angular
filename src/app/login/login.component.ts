import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginDetails = {
    username: '',
    password: ''
  }

  constructor(private fb: FormBuilder, private router: Router, private appService: AppService, private auth: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  login() {
    this.loginDetails.password = this.loginForm.value.password
    this.loginDetails.username = this.loginForm.value.username
    this.auth.isAuthenticated().subscribe(() => {
      localStorage.setItem('username', this.loginForm.value.username);
      this.appService.setUsername(this.loginForm.value.username);
      this.router.navigate(['/','members']);
    })
   
  }
}
