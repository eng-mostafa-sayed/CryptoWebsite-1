import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-orsignin',
  templateUrl: './signup-orsignin.component.html',
  styleUrls: ['./signup-orsignin.component.scss'],
})
export class SignupOrsigninComponent implements OnInit {
  status: boolean = true;
  signupForm: FormGroup;
  signinForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
    });
    this.signinForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }
  onSignup() {}
  onSignin() {}
}
