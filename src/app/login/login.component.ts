import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {LoginService} from '../shared/Login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  errorMsg: string;


  constructor(private fb: FormBuilder, public Loginservice: LoginService , private router: Router) {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
  ngOnInit(): void {
  }

}
