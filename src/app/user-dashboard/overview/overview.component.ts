import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Balance } from '../balance.model';
import { DashboardService } from '../user-dashboard.service';
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  minedTapOpend = 'tap1';
  minedChartTapOpend = 'tap1';
  gainsChartTapOpend = 'tap1';
  config1 = {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    },
  };
  config2 = {
    type: 'line',
    data: data,
  };
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

  tap1Data: any;
  tap2Data: any;
  tap3Data: any;
  tap4Data: any;

  basicOptions: any;

  constructor(private dashboard: DashboardService) {
    Chart.register(...registerables);
  }

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

    this.tap1Data = {
      labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
      datasets: [
        {
          label: '',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: 'rgba(255, 73, 128, 1)',
          tension: 0.4,
          backgroundColor: 'rgba(255, 73, 128, 0.2)',
        },
      ],
    };
    this.tap2Data = {
      labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
      datasets: [
        {
          label: '',
          data: [10, 20, 20, 20, 50, 10, 40],
          fill: true,
          borderColor: 'rgba(255, 73, 128, 1)',
          tension: 0.4,
          backgroundColor: 'rgba(255, 73, 128, 0.2)',
        },
      ],
    };
    this.tap3Data = {
      labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
      datasets: [
        {
          label: '',
          data: [15, 15, 15, 20, 40, 62, 45],
          fill: true,
          borderColor: 'rgba(255, 73, 128, 1)',
          tension: 0.4,
          backgroundColor: 'rgba(255, 73, 128, 0.2)',
        },
      ],
    };
    this.tap4Data = {
      labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7'],
      datasets: [
        {
          label: '',
          data: [80, 70, 50, 30, 80, 50, 30],
          fill: true,
          borderColor: 'rgba(255, 73, 128, 1)',
          tension: 0.4,
          backgroundColor: 'rgba(255, 73, 128, 0.2)',
        },
      ],
    };
    this.basicOptions = {
      plugins: {
        tooltip: {
          backgroundColor: 'rgba(29, 26, 39, 0.6)',
        },
        legend: {
          display: false,
          labels: {
            boxWidth: 0,
            boxHeight: 0,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
    };
  }
  update(event: Event) {}
  minedTap1() {
    this.minedTapOpend = 'tap1';
  }
  minedTap2() {
    this.minedTapOpend = 'tap2';
  }
  minedTap3() {
    this.minedTapOpend = 'tap3';
  }
  minedTap4() {
    this.minedTapOpend = 'tap4';
  }
  minedChartTap1() {
    this.minedChartTapOpend = 'tap1';
  }
  minedChartTap2() {
    this.minedChartTapOpend = 'tap2';
  }
  minedChartTap3() {
    this.minedChartTapOpend = 'tap3';
  }
  minedChartTap4() {
    this.minedChartTapOpend = 'tap4';
  }
  gainsChartTap1() {
    this.gainsChartTapOpend = 'tap1';
  }
  gainsChartTap2() {
    this.gainsChartTapOpend = 'tap2';
  }
  gainsChartTap3() {
    this.gainsChartTapOpend = 'tap3';
  }
  gainsChartTap4() {
    this.gainsChartTapOpend = 'tap4';
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
