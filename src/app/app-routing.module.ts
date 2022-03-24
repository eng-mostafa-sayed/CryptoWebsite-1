import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupOrsigninComponent } from './Auth/signup-orsignin/signup-orsignin.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
  },
  { path: 'signupOrsignin', component: SignupOrsigninComponent },
  { path: '', redirectTo: 'signupOrsignin', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
