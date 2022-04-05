import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  dropCollapsed = false;
  selected = 'all';
  newPlanForm: FormGroup;
  newFormOpend = false;
  editFormOpend = false;
  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedMiner = '';
  selectedMinerEdit = '';
  miners = [
    {
      name: 'Antminer L7 9500Mh ',
      date: '12 Jan 2022 - 12:00PM',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      crypto2: 'ETH (Ethereum)',
      power: '23 580',
      pricePer: '23 580',
      profitability: 143,
      price: 500,
    },
    {
      name: 'Antminer E9',
      date: '12 Jan 2022 - 12:00PM',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      crypto2: 'ETH (Ethereum)',
      power: '23 580 GH/S',
      pricePer: '23 580',
      unitPrice: '12,000',
      price: 500,
    },
    {
      name: 'Antminer S19 Pro',
      date: '12 Jan 2022 - 12:00PM',
      icon: '',
      crypto: 'BTC (Bitcoin)',
      crypto2: 'ETH (Ethereum)',
      power: '23 580 GH/S      ',
      pricePer: '23 580',
      unitPrice: '12,000',
      price: 500,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  checkType(miner: any) {
    if (miner.name.includes('BTC') && this.selected == 'tap1') {
      return true;
    } else if (miner.name.includes('ETH') && this.selected == 'tap2') {
      return true;
    } else if (miner.name.includes('RVN') && this.selected == 'tap3') {
      return true;
    } else if (miner.name.includes('STX') && this.selected == 'tap4') {
      return true;
    } else if (this.selected == 'all') {
      return true;
    }

    this.newPlanForm = new FormGroup({
      name: new FormControl(null),
      currency: new FormControl(null),
      power: new FormControl(null),
      profitability: new FormControl(null),
      price: new FormControl(null),
    });
  }
  checkSelected(minerName: string) {
    if (this.selectedMiner != minerName) {
      this.selectedMiner = minerName;
      this.selectedMinerEdit = minerName;
    } else this.selectedMiner = '';
  }
  onSave() {
    if (
      this.newPlanForm.value.name &&
      this.newPlanForm.value.currency &&
      this.newPlanForm.value.power &&
      this.newPlanForm.value.profitability &&
      this.newPlanForm.value.price
    ) {
    } else return;
  }
}
