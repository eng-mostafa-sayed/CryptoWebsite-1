import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverviewComponent } from './overview/overview.component';
import { PlansComponent } from './plans/plans.component';
import { MiningDevicesComponent } from './mining-devices/mining-devices.component';
import { SubUsersComponent } from './sub-users/sub-users.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    DashHeaderComponent,
    SidenavComponent,
    OverviewComponent,
    PlansComponent,
    MiningDevicesComponent,
    SubUsersComponent,
  ],
  imports: [CommonModule, AdminDashboardRoutingModule],
})
export class AdminDashboardModule {}
