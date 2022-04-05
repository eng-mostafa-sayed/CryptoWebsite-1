import { Component, OnInit } from '@angular/core';

export interface Plan {
  date: Date;
  name: string;
  total: number;
  current: number;
  expire: Date;
}

const activePlanData: Plan[] = [
  {
    date: new Date('30 Dec 2021'),
    name: 'Bitcoin — Starter  ',
    total: 4.0026,
    current: 4.0026,
    expire: new Date('30 Dec 2022'),
  },
  {
    date: new Date('14 March 2021'),
    name: 'Ethereum — Starter  ',
    total: 6.941,
    current: 6.941,
    expire: new Date('14 March 2022'),
  },
  {
    date: new Date('5 Nov 2021'),
    name: 'Ethereum — Starter',
    total: 9.0122,
    current: 9.0122,
    expire: new Date('5 Nov 2022'),
  },
  {
    date: new Date('5 Sep 2021'),
    name: 'Ethereum — Starter',
    total: 10.811,
    current: 10.811,
    expire: new Date('5 Sep 2022'),
  },
  {
    date: new Date('1 Oct 2021'),
    name: 'Ethereum — Starter',
    total: 12.0107,
    current: 12.0107,

    expire: new Date('1 Oct 2022'),
  },
  {
    date: new Date('6 Feb 2021'),
    name: 'Bitcoin — Starter',
    total: 14.0067,
    current: 14.0067,

    expire: new Date('6 Feb 2022'),
  },
  {
    date: new Date('8 Jul 2021'),
    name: 'Ethereum — Starter',
    total: 15.9994,
    current: 15.9994,
    expire: new Date('8 Jul 2022'),
  },
  {
    date: new Date('18 Oct 2021'),
    name: 'Bitcoin — Starter',
    total: 18.9984,
    current: 18.9984,
    expire: new Date('12 Jan 2022'),
  },
];

const expiredPlanData: Plan[] = [
  {
    date: new Date('10 Jan 2021'),
    name: 'Bitcoin — Starter',
    total: 1.0079,
    current: 1.0079,
    expire: new Date('10 Jan 2022'),
  },
  {
    date: new Date('30 Dec 2021'),
    name: 'Bitcoin — Starter  ',
    total: 4.0026,
    current: 4.0026,
    expire: new Date('30 Dec 2022'),
  },
  {
    date: new Date('14 March 2021'),
    name: 'Ethereum — Starter  ',
    total: 6.941,
    current: 6.941,
    expire: new Date('14 March 2022'),
  },
  {
    date: new Date('5 Nov 2021'),
    name: 'Ethereum — Starter',
    total: 9.0122,
    current: 9.0122,
    expire: new Date('5 Nov 2022'),
  },
  {
    date: new Date('5 Sep 2021'),
    name: 'Ethereum — Starter',
    total: 10.811,
    current: 10.811,
    expire: new Date('5 Sep 2022'),
  },
];
@Component({
  selector: 'app-sub-user',
  templateUrl: './sub-user.component.html',
  styleUrls: ['./sub-user.component.scss'],
})
export class SubUserComponent implements OnInit {
  balances = [
    {
      name: 'BTC',
      value: '0.000002130',
    },
    {
      name: 'ETH',
      value: '0.000002130',
    },
    {
      name: 'RVN',
      value: '0.000002130',
    },
    {
      name: 'STX',
      value: '0.000002130',
    },
  ];
  selectedTap = 'tap1';
  ////////////////////////The table data//////////////////////////
  activePlanData = activePlanData;
  expiredPlanData = expiredPlanData;
  activePlanDataLength: number = activePlanData.length;
  expiredPlanDataLength: number = expiredPlanData.length;
  totalPlansLength: number = activePlanData.length + expiredPlanData.length;

  ////////////////////miners data ////////////////////
  miners: {
    name: string;
    encrypt: string;
    img: string;
    start: string;
    end: string;
    price: string;
    profit: string;
    status: boolean;
  }[] = [
    {
      name: 'Antminer S19 Pro ',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
      status: true,
    },
    {
      name: 'Antminer T9+',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
      status: false,
    },
    {
      name: 'WhatsMiner M32-62T',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
      status: false,
    },
    {
      name: 'PangolinMiner M3X',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
      status: false,
    },
  ];
  minersLength = this.miners.length;
  constructor() {}

  ngOnInit(): void {}
  checkLength(): boolean {
    return this.miners.length >= 1;
  }
}
