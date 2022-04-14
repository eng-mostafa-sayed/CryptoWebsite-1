import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  signinForm!: FormGroup;
  passwordShown = false;
  constructor(public authService: AdminAuthService) {}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
      }),
    });
  }
  onSignin() {
    if (this.signinForm.value.email && this.signinForm.value.password)
      this.authService.signin(
        this.signinForm.value.email,
        this.signinForm.value.password
      );
  }
  changeInput(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.passwordShown = !this.passwordShown;
  }
}
