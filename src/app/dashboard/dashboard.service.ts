import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { Balance } from './balance.model';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  balances$ = new Subject<Balance[]>();
  constructor() {}

  updateBalances() {
    this.balances$.next([
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
    ]);
  }
}
