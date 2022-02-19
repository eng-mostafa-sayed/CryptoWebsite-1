import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-box',
  templateUrl: './balance-box.component.html',
  styleUrls: ['./balance-box.component.scss'],
})
export class BalanceBoxComponent implements OnInit {
  @Input() currency: string;
  @Input() currencyBalance: number;
  @Input() plans: number;
  @Input() devices: number;
  @Input() price: string;

  constructor() {}

  ngOnInit(): void {}
}
