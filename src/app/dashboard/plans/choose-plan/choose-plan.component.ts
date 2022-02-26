import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss'],
})
export class ChoosePlanComponent implements OnInit {
  short = true;
  plans = [
    {
      type: 'Lite Miners ',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      power: '',
      pricePer: '',
      profitability: '',
      price: 200,
    },
    {
      type: 'Regular Miners ',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      power: '',
      pricePer: '',
      profitability: '',
      price: 500,
    },
    {
      type: 'Pro Miners',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      power: '',
      pricePer: '',
      profitability: '',
      price: 1000,
    },
    {
      type: 'Elite Miners',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      power: '',
      pricePer: '',
      profitability: '',
      price: 5000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
