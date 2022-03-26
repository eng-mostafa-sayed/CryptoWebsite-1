import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  crypto = true;
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
  constructor() {}

  ngOnInit(): void {}
}
