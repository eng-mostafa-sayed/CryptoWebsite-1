import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DiagloComponent } from '../diaglo/diaglo.component';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss'],
})
export class DashHeaderComponent implements OnInit {
  currentRoute: string = 'Overview';
  collapse = false;
  displayFiat = true;
  coins: { crypto: string; value: string; fiatValue: number }[] = [
    {
      crypto: 'BTC',
      value: '0.100000',
      fiatValue: 52,
    },
    {
      crypto: 'RVN',
      value: '0.560000',
      fiatValue: 62,
    },
    {
      crypto: 'STX',
      value: '0.000550',
      fiatValue: 5,
    },
    {
      crypto: 'ETH',
      value: '0.000000',
      fiatValue: 10,
    },
  ];
  selected = this.coins[0].value;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    //to survive a reload
    if (this.router.url == '/user-dashboard/overview') {
      this.currentRoute = 'Overview';
    }
    if (this.router.url == '/user-dashboard/hashrate-plans') {
      this.currentRoute = 'Hashrate plans';
    }
    if (this.router.url == '/user-dashboard/mining-devices') {
      this.currentRoute = 'Mining devices';
    }
    if (this.router.url == '/user-dashboard/withdraw') {
      this.currentRoute = 'Withdraw';
    }
    if (this.router.url == '/user-dashboard/deposit') {
      this.currentRoute = 'Deposit';
    }

    //to update whenever the user navigate to another route
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url == '/user-dashboard/overview') {
          this.currentRoute = 'Overview';
        }
        if (event.url == '/user-dashboard/hashrate-plans') {
          this.currentRoute = 'Hashrate plans';
        }
        if (event.url == '/user-dashboard/mining-devices') {
          this.currentRoute = 'Mining devices';
        }
        if (event.url == '/user-dashboard/withdraw') {
          this.currentRoute = 'Withdraw';
        }
        if (event.url == '/user-dashboard/deposit') {
          this.currentRoute = 'Deposit';
        }
      });
  }
}
