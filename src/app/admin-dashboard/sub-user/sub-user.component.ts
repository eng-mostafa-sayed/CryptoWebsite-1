import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { AdminDashboardService } from '../admin-dashboard.service';
import { UserPlan } from '../models/user-plan.model';
import { User } from '../models/user.model';
import { UserAsic } from '../models/userAsic.model';

export interface Plan {
  date: Date;
  name: string;
  total: number;
  current: number;
  expire: Date;
}

const activePlanData: Plan[] = [
  {
    date: new Date('30 Dec 2021'),
    name: 'Bitcoin — Starter  ',
    total: 4.0026,
    current: 4.0026,
    expire: new Date('30 Dec 2022'),
  },
  {
    date: new Date('14 March 2021'),
    name: 'Ethereum — Starter  ',
    total: 6.941,
    current: 6.941,
    expire: new Date('14 March 2022'),
  },
  {
    date: new Date('5 Nov 2021'),
    name: 'Ethereum — Starter',
    total: 9.0122,
    current: 9.0122,
    expire: new Date('5 Nov 2022'),
  },
  {
    date: new Date('5 Sep 2021'),
    name: 'Ethereum — Starter',
    total: 10.811,
    current: 10.811,
    expire: new Date('5 Sep 2022'),
  },
  {
    date: new Date('1 Oct 2021'),
    name: 'Ethereum — Starter',
    total: 12.0107,
    current: 12.0107,

    expire: new Date('1 Oct 2022'),
  },
  {
    date: new Date('6 Feb 2021'),
    name: 'Bitcoin — Starter',
    total: 14.0067,
    current: 14.0067,

    expire: new Date('6 Feb 2022'),
  },
  {
    date: new Date('8 Jul 2021'),
    name: 'Ethereum — Starter',
    total: 15.9994,
    current: 15.9994,
    expire: new Date('8 Jul 2022'),
  },
  {
    date: new Date('18 Oct 2021'),
    name: 'Bitcoin — Starter',
    total: 18.9984,
    current: 18.9984,
    expire: new Date('12 Jan 2022'),
  },
];

const expiredPlanData: Plan[] = [
  {
    date: new Date('10 Jan 2021'),
    name: 'Bitcoin — Starter',
    total: 1.0079,
    current: 1.0079,
    expire: new Date('10 Jan 2022'),
  },
  {
    date: new Date('30 Dec 2021'),
    name: 'Bitcoin — Starter  ',
    total: 4.0026,
    current: 4.0026,
    expire: new Date('30 Dec 2022'),
  },
  {
    date: new Date('14 March 2021'),
    name: 'Ethereum — Starter  ',
    total: 6.941,
    current: 6.941,
    expire: new Date('14 March 2022'),
  },
  {
    date: new Date('5 Nov 2021'),
    name: 'Ethereum — Starter',
    total: 9.0122,
    current: 9.0122,
    expire: new Date('5 Nov 2022'),
  },
  {
    date: new Date('5 Sep 2021'),
    name: 'Ethereum — Starter',
    total: 10.811,
    current: 10.811,
    expire: new Date('5 Sep 2022'),
  },
];
@Component({
  selector: 'app-sub-user',
  templateUrl: './sub-user.component.html',
  styleUrls: ['./sub-user.component.scss'],
})
export class SubUserComponent implements OnInit {
  userData: User = new User();
  sub: Subscription;
  userID: string;
  userBalances: { cryptoName: string; value: string }[];
  selectedTap = 'tap1';
  userPlans: UserPlan[];
  ////////////////////////The table data//////////////////////////
  activeUserPlans: UserPlan[] = [];
  expiredUserPlans: UserPlan[] = [];
  activePlansLength: number = activePlanData.length;
  expiredPlansLength: number = expiredPlanData.length;
  totalPlansLength: number = activePlanData.length + expiredPlanData.length;
  ////////////////////miners data ////////////////////
  userAsics: UserAsic[];
  // minersLength = this.miners.length;
  constructor(
    private dashboardService: AdminDashboardService,
    private activatedRoute: ActivatedRoute,
    private sharedSerivce: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedSerivce.isLoading.next(true);
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.userID = params.get('userID')!;
      this.dashboardService.getUserData(this.userID).subscribe({
        next: (res) => {
          this.userData = res;
          this.userBalances = [
            {
              cryptoName: 'BTC',
              value: res.balance.btc,
            },
            {
              cryptoName: 'ETH',
              value: res.balance.eth,
            },
            {
              cryptoName: 'LTCT',
              value: res.balance.ltct,
            },
            {
              cryptoName: 'RVN',
              value: res.balance.rvn,
            },
          ];
          this.sharedSerivce.isLoading.next(false);
        },
      });
      this.dashboardService.getUserPlans(this.userID).subscribe({
        next: (res) => {
          this.activeUserPlans = res.filter((e) => {
            return e.planStatus === true;
          });
          this.expiredUserPlans = res.filter((e) => {
            return e.planStatus === false;
          });
          this.totalPlansLength = res.length;
          this.activePlansLength = this.activeUserPlans.length;
          this.expiredPlansLength = this.expiredUserPlans.length;
        },
      });
      this.dashboardService.getUserAsics(this.userID).subscribe({
        next: (res) => {
          this.userAsics = res;
        },
      });
    });
  }
  // checkLength(): boolean {
  //   return this.miners.length >= 1;
  // }
}
