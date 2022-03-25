import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MiningDevicesComponent } from './mining-devices/mining-devices.component';
import { OverviewComponent } from './overview/overview.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'hashrate-plans', component: PlansComponent },
      { path: 'mining-devices', component: MiningDevicesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
