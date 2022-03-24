import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining-devices',
  templateUrl: './mining-devices.component.html',
  styleUrls: ['./mining-devices.component.scss'],
})
export class MiningDevicesComponent implements OnInit {
  minersChartOpend = 'tap1';
  tap1Data: any;
  tap2Data: any;
  tap3Data: any;
  tap4Data: any;
  basicOptions: any;
  activeHash = [
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
  miners: {
    name: string;
    encrypt: string;
    img: string;
    start: string;
    end: string;
    price: string;
    profit: string;
  }[] = [
    {
      name: 'Antminer S19 Pro ',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
    },
    {
      name: 'Antminer T9+',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
    },
    {
      name: 'WhatsMiner M32-62T',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
    },
    {
      name: 'PangolinMiner M3X',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {
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
  minedChartTap1() {
    this.minersChartOpend = 'tap1';
  }
  minedChartTap2() {
    this.minersChartOpend = 'tap2';
  }
  minedChartTap3() {
    this.minersChartOpend = 'tap3';
  }
  minedChartTap4() {
    this.minersChartOpend = 'tap4';
  }
  checkLength(): boolean {
    return this.miners.length >= 1;
  }
}
