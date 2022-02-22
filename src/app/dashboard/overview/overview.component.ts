import { Component, OnInit } from '@angular/core';
import { Balance } from '../balance.model';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  balances: Balance[];
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

  constructor(private dashboard: DashboardService) {}

  ngOnInit(): void {
    this.dashboard.balances$.subscribe((balances) => {
      this.balances = balances;
    });
    //this fetches the data and push it in the balances$ stream
    this.dashboard.updateBalances();
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
}
