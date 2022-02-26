import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { ConfirmationComponent } from './Auth/confirmation/confirmation.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupOrsigninComponent } from './Auth/signup-orsignin/signup-orsignin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChooseMinerComponent } from './dashboard/mining-devices/choose-miner/choose-miner.component';
import { MiningDevicesComponent } from './dashboard/mining-devices/mining-devices.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { ChoosePlanComponent } from './dashboard/plans/choose-plan/choose-plan.component';
import { Cperiod1Component } from './dashboard/plans/cperiod1/cperiod1.component';
import { Cperiod2Component } from './dashboard/plans/cperiod2/cperiod2.component';
import { Cperiod3Component } from './dashboard/plans/cperiod3/cperiod3.component';
import { PlansComponent } from './dashboard/plans/plans.component';
import { ReferralComponent } from './dashboard/referral/referral.component';
import { TimelineChartComponent } from './dashboard/timeline-chart/timeline-chart.component';
import { WithdrawComponent } from './dashboard/withdraw/withdraw.component';

const routes: Routes = [
  { path: '', redirectTo: 'signupOrsignin', pathMatch: 'full' },
  { path: 'signupOrsignin', component: SignupOrsigninComponent },
  { path: 'test', component: TimelineChartComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'hashrate-plans', component: PlansComponent },
      {
        path: 'choose-plan',
        component: ChoosePlanComponent,
      },
      { path: 'mining-devices', component: MiningDevicesComponent },
      {
        path: 'choose-miner',
        component: ChooseMinerComponent,
      },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'referral-program', component: ReferralComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
