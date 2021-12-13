import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  loading = false;
  signupForm!: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      phone: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(/^01[0125][0-9]{8}$/),
        ],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
      }),
    });
  }
  onSignup() {
    if (this.signupForm.invalid) {
      return;
    } else {
      this.router.navigate(['signup/confirmation']);
    }
  }
}
