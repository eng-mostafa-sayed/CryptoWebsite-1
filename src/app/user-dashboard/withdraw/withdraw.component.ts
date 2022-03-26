import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  crypto = true;
  cryptoTapOpend = 'tap1';
  withdrawForm: FormGroup;
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

  ngOnInit(): void {
    this.withdrawForm = new FormGroup({
      address: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(32),
          Validators.maxLength(32),
        ],
      }),
      value: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }
  onWithdraw() {}
  cryptoPlansTap1() {
    this.cryptoTapOpend = 'tap1';
  }
  cryptoPlansTap2() {
    this.cryptoTapOpend = 'tap2';
  }
  cryptoPlansTap3() {
    this.cryptoTapOpend = 'tap3';
  }
  cryptoPlansTap4() {
    this.cryptoTapOpend = 'tap4';
  }
}
