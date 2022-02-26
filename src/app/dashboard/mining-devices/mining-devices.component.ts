import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining-devices',
  templateUrl: './mining-devices.component.html',
  styleUrls: ['./mining-devices.component.scss'],
})
export class MiningDevicesComponent implements OnInit {
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

  ngOnInit(): void {}
  checkLength(): boolean {
    return this.miners.length >= 1;
  }
}
