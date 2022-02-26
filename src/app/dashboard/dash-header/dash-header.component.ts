import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss'],
})
export class DashHeaderComponent implements OnInit {
  currentRoute: string = 'Overview';
  constructor(private router: Router) {}

  ngOnInit(): void {
    //to survive a reload
    if (this.router.url == '/dashboard/overview') {
      this.currentRoute = 'Overview';
    }
    if (this.router.url == '/dashboard/hashrate-plans') {
      this.currentRoute = 'Hashrate plans';
    }
    if (this.router.url == '/dashboard/mining-devices') {
      this.currentRoute = 'Mining devices';
    }
    if (this.router.url == '/dashboard/withdraw') {
      this.currentRoute = 'Withdraw';
    }
    if (this.router.url == '/dashboard/referral-program') {
      this.currentRoute = 'Referral Program';
    }

    //to update whenever the user navigate to another route
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url == '/dashboard/overview') {
          this.currentRoute = 'Overview';
        }
        if (event.url == '/dashboard/hashrate-plans') {
          this.currentRoute = 'Hashrate plans';
        }
        if (event.url == '/dashboard/mining-devices') {
          this.currentRoute = 'Mining devices';
        }
        if (event.url == '/dashboard/withdraw') {
          this.currentRoute = 'Withdraw';
        }
        if (event.url == '/dashboard/referral-program') {
          this.currentRoute = 'Referral Program';
        }
      });
  }
}
