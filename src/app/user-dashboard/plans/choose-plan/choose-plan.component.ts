import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss'],
})
export class ChoosePlanComponent implements OnInit {
  short = true;
  shortPlansOpend = 'tap1';
  longPlansOpend = 'tap1';
  tap1Data: any;
  tap2Data: any;
  tap3Data: any;
  tap4Data: any;
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

  shortPlansTap1() {
    this.shortPlansOpend = 'tap1';
  }
  shortPlansTap2() {
    this.shortPlansOpend = 'tap2';
  }
  shortPlansTap3() {
    this.shortPlansOpend = 'tap3';
  }
  shortPlansTap4() {
    this.shortPlansOpend = 'tap4';
  }
  longPlansTap1() {
    this.longPlansOpend = 'tap1';
  }
  longPlansTap2() {
    this.longPlansOpend = 'tap2';
  }
  longPlansTap3() {
    this.longPlansOpend = 'tap3';
  }
  longPlansTap4() {
    this.longPlansOpend = 'tap4';
  }
}
