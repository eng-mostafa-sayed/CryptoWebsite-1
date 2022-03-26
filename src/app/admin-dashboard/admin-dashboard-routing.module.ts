import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MinersComponent } from './miners/miners.component';
import { OverviewComponent } from './overview/overview.component';
import { PlansComponent } from './plans/plans.component';
import { RequestComponent } from './request/request.component';
import { SubUsersComponent } from './sub-users/sub-users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'hashrate-plans', component: PlansComponent },
      { path: 'subscribed-users', component: SubUsersComponent },
      { path: 'miners', component: MinersComponent },
      { path: 'request', component: RequestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
