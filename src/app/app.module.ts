import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmationComponent } from './Auth/confirmation/confirmation.component';
import { SliderComponent } from './Auth/slider/slider.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { PlansComponent } from './dashboard/plans/plans.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiningDevicesComponent } from './dashboard/mining-devices/mining-devices.component';
import { WithdrawComponent } from './dashboard/withdraw/withdraw.component';
import { ReferralComponent } from './dashboard/referral/referral.component';
import { SignupOrsigninComponent } from './Auth/signup-orsignin/signup-orsignin.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { BalanceBoxComponent } from './dashboard/overview/balance-box/balance-box.component';
import { DashHeaderComponent } from './dashboard/dash-header/dash-header.component';
import { MiningDetailsComponent } from './dashboard/overview/mining-details/mining-details.component';
import { TabsComponent } from './dashboard/tabs/tabs.component';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { TimelineChartComponent } from './dashboard/timeline-chart/timeline-chart.component';

import { ChartModule } from 'primeng/chart';
import { ChoosePlanComponent } from './dashboard/plans/choose-plan/choose-plan.component';
import { Cperiod1Component } from './dashboard/plans/cperiod1/cperiod1.component';
import { Cperiod2Component } from './dashboard/plans/cperiod2/cperiod2.component';
import { Cperiod3Component } from './dashboard/plans/cperiod3/cperiod3.component';

///////////////////////////////

/////////////////////////////////////
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    ConfirmationComponent,
    SliderComponent,
    OverviewComponent,
    SidenavComponent,
    PlansComponent,
    DashboardComponent,
    MiningDevicesComponent,
    WithdrawComponent,
    ReferralComponent,
    SignupOrsigninComponent,
    SpinnerComponent,
    BalanceBoxComponent,
    DashHeaderComponent,
    MiningDetailsComponent,
    TabsComponent,
    TimelineChartComponent,
    ChoosePlanComponent,
    Cperiod1Component,
    Cperiod2Component,
    Cperiod3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    CommonModule,
    MatSortModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
