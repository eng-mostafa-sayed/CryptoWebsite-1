import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authStatusListner = new BehaviorSubject<boolean>(false);
  saveTimeout: any;
  constructor(private http: HttpClient, private router: Router) {}

  signup(name: String, email: String, phone: number, password: String) {
    return this.http.post<any>(
      'https://cominer.herokuapp.com/api/user/register?key=c3fe929c35dd0cbcc8f062bb60e9d2ce7d14be21513d07c53e370d81ba9de4a4',
      {
        name,
        email,
        phone,
        password,
      }
    );
  }
  signin(email: String, password: String) {
    this.http
      .post(
        'https://cominer.herokuapp.com/api/login?key=c3fe929c35dd0cbcc8f062bb60e9d2ce7d14be21513d07c53e370d81ba9de4a4',
        {
          email: email,
          password: password,
        }
      )
      .subscribe({
        next: (res) => {},
        error: (err) => {
          console.log(err);
        },
      });

    // .subscribe(
    //   (res) => {
    //     //log me out after the expire date

    //     // this.token = res.token;
    //     // this.userId = res.user.userId;
    //     // this.email = res.user.email;
    //     // const newExpirDate = Date.now() + res.expiresIn * 60 * 1000;
    //     // //save data to local storage
    //     // this.saveAuthData(
    //     //   res.token,
    //     //   newExpirDate,
    //     //   res.user.email,
    //     //   res.user.userId
    //     // );
    //     console.log(res);
    //     this.authStatusListner.next(true);
    //     this.router.navigate(['/dashboard/overview']);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  logout() {
    clearTimeout(this.saveTimeout);
    this.clearAuthData();
    // this.token = '';
    // this.userId = '';
    // this.email = '';
    this.authStatusListner.next(false);
    this.router.navigate(['/']);
  }
  autoAuth() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }
    const newExpirDate = Number(authInfo.expirDate) - Date.now();
    if (newExpirDate > 0) {
      this.saveTimeout = setTimeout(() => {
        this.logout();
      }, newExpirDate);
      this.authStatusListner.next(true);
      // this.token = authInfo.token;
      // this.userId = authInfo.userId;
      // this.email = authInfo.email;
    }
  }

  private saveAuthData(
    token: string,
    expirDate: number,
    email: string,
    userId: string
  ) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expirDate', expirDate.toString());
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');
    const expirDate = localStorage.getItem('expirDate');
    if (!token || !expirDate) {
      return;
    }
    return {
      token,
      expirDate,
      email,
      userId,
    };
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirDate');
  }
}
