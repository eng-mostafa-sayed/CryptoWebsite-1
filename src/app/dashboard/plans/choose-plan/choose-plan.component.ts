import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss'],
})
export class ChoosePlanComponent implements OnInit {
  short = true;
  shortPlans = [
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
  longPlans = [
    {
      type: 'Lite Miners ',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      power: '',
      pricePer: '',
      profitability: '',
      price: 3000,
    },
    {
      type: 'Regular Miners ',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      power: '',
      pricePer: '',
      profitability: '',
      price: 6000,
    },
    {
      type: 'Pro Miners',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      power: '',
      pricePer: '',
      profitability: '',
      price: 20000,
    },
    {
      type: 'Elite Miners',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      power: '',
      pricePer: '',
      profitability: '',
      price: 60000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
