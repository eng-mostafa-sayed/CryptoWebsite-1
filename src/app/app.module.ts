import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    CommonModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
