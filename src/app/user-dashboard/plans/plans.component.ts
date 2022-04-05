import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Plan {
  date: Date;
  name: string;
  total: number;
  current: number;
  average: number;
  expire: Date;
}

const activePlanData: Plan[] = [
  {
    date: new Date('30 Dec 2021'),
    name: 'Bitcoin — Starter  ',
    total: 4.0026,
    current: 4.0026,
    average: 4.0026,
    expire: new Date('30 Dec 2022'),
  },
  {
    date: new Date('14 March 2021'),
    name: 'Ethereum — Starter  ',
    total: 6.941,
    current: 6.941,
    average: 6.941,
    expire: new Date('14 March 2022'),
  },
  {
    date: new Date('5 Nov 2021'),
    name: 'Ethereum — Starter',
    total: 9.0122,
    current: 9.0122,
    average: 9.0122,
    expire: new Date('5 Nov 2022'),
  },
  {
    date: new Date('5 Sep 2021'),
    name: 'Ethereum — Starter',
    total: 10.811,
    current: 10.811,
    average: 10.811,
    expire: new Date('5 Sep 2022'),
  },
  {
    date: new Date('1 Oct 2021'),
    name: 'Ethereum — Starter',
    total: 12.0107,
    current: 12.0107,
    average: 12.0107,
    expire: new Date('1 Oct 2022'),
  },
  {
    date: new Date('6 Feb 2021'),
    name: 'Bitcoin — Starter',
    total: 14.0067,
    current: 14.0067,
    average: 14.0067,
    expire: new Date('6 Feb 2022'),
  },
  {
    date: new Date('8 Jul 2021'),
    name: 'Ethereum — Starter',
    total: 15.9994,
    current: 15.9994,
    average: 15.9994,
    expire: new Date('8 Jul 2022'),
  },
  {
    date: new Date('18 Oct 2021'),
    name: 'Bitcoin — Starter',
    total: 18.9984,
    current: 18.9984,
    average: 18.9984,
    expire: new Date('12 Jan 2022'),
  },
];

const expiredPlanData: Plan[] = [
  {
    date: new Date('10 Jan 2021'),
    name: 'Bitcoin — Starter',
    total: 1.0079,
    current: 1.0079,
    average: 1.0079,
    expire: new Date('10 Jan 2022'),
  },
  {
    date: new Date('30 Dec 2021'),
    name: 'Bitcoin — Starter  ',
    total: 4.0026,
    current: 4.0026,
    average: 4.0026,
    expire: new Date('30 Dec 2022'),
  },
  {
    date: new Date('14 March 2021'),
    name: 'Ethereum — Starter  ',
    total: 6.941,
    current: 6.941,
    average: 6.941,
    expire: new Date('14 March 2022'),
  },
  {
    date: new Date('5 Nov 2021'),
    name: 'Ethereum — Starter',
    total: 9.0122,
    current: 9.0122,
    average: 9.0122,
    expire: new Date('5 Nov 2022'),
  },
  {
    date: new Date('5 Sep 2021'),
    name: 'Ethereum — Starter',
    total: 10.811,
    current: 10.811,
    average: 10.811,
    expire: new Date('5 Sep 2022'),
  },
];
const activeHashPower = [
  {
    crypto: 'BTC (Bitcoin)',
    plans: '2 active plans',
    speed: '23 580',
  },
  {
    crypto: 'ETH (Ethereum)',
    plans: '2 active plans',
    speed: '23 580',
  },
  {
    crypto: 'RVN (Ravencoin)',
    plans: 'No active plan',
    speed: '0',
  },
  {
    crypto: 'STX (Stacks)',
    plans: 'No active plan',
    speed: '0',
  },
];
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  ////////////////////////The table data//////////////////////////
  activePlanData = activePlanData;
  expiredPlanData = expiredPlanData;
  activePlanDataLength: number = activePlanData.length;
  expiredPlanDataLength: number = expiredPlanData.length;
  //////////////////////////The chart data//////////////////////////
  minedChartTapOpend = 'tap1';
  tap1Data: any;
  tap2Data: any;
  tap3Data: any;
  tap4Data: any;
  basicOptions: any;
  /////////////////////////Active hash data/////////////////////////////////
  activeHash: { crypto: string; plans: string; speed: string }[];
  constructor() {}
  ngOnInit(): void {
    this.activeHash = activeHashPower;
    ////////////this is for the chart data////////////////
    this.tap1Data =
      this.tap2Data =
      this.tap3Data =
      this.tap4Data =
        {
          labels: [
            'Mar 1',
            'Mar 2',
            'Mar 3',
            'Mar 4',
            'Mar 5',
            'Mar 6',
            'Mar 7',
          ],
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
    ///////////////////////////
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
}
