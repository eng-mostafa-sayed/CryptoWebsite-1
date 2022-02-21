import { Component, OnInit } from '@angular/core';
import { Balance } from '../balance.model';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  balances: Balance[] = [
    {
      currency: 'BTC',
      currencyBalance: 0.00000213,
      plans: 2,
      devices: 1,
      price: '47,990.00',
      miningSpeed: '3,230',
      mined: 0.000003,
      minWithdraw: 0.00005,
    },
    {
      currency: 'ETH',
      currencyBalance: 0.000025119,
      plans: 2,
      devices: 1,
      price: '99,990.00',
      miningSpeed: '8,299',
      mined: 0.00999,
      minWithdraw: 0.0021879,
    },
    {
      currency: 'RVN',
      currencyBalance: 0.0,
      plans: 0,
      devices: 0,
      price: '0.08826',
      miningSpeed: '2,222',
      mined: 0.0,
      minWithdraw: 0.000011,
    },
    {
      currency: 'STX',
      currencyBalance: 0.0,
      plans: 0,
      devices: 0,
      price: '2.13',
      miningSpeed: '9,299',
      mined: 0.0,
      minWithdraw: 0.000099,
    },
  ];
  BTC: Balance;
  ETH: Balance;
  RVN: Balance;
  STX: Balance;

  multi: any;
  view: any = [700, 350];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Mined';
  timeline: boolean = false;
  showGridLines: boolean = true;

  colorScheme: any = {
    domain: ['#A10A28'],
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.BTC, this.ETH, this.RVN, this.STX);
    this.getBTC();
    this.getETH();
    this.getRVN();
    this.getSTX();
  }
  getBTC() {
    this.BTC = this.balances.filter((element) => {
      return element.currency === 'BTC';
    })[0];
  }
  getETH() {
    this.ETH = this.balances.filter((element) => {
      return element.currency === 'ETH';
    })[0];
  }
  getRVN() {
    this.RVN = this.balances.filter((element) => {
      return element.currency === 'RVN';
    })[0];
  }
  getSTX() {
    this.STX = this.balances.filter((element) => {
      return element.currency === 'STX';
    })[0];
  }

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
