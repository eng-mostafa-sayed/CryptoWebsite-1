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
  miners = [
    {
      name: 'Antminer E9',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
    },
    {
      name: 'Antminer E9',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
    },
    {
      name: 'Antminer E9',
      encrypt: 'Bitcoin — SHA-256',
      img: '',
      start: '',
      end: '',
      price: '',
      profit: '',
    },
    {
      name: 'Antminer E9',
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
}
