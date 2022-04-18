import { Component } from '@angular/core';
import { AdminAuthService } from './Auth/admin-auth.service';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mining-Website';
  isLoading = false;
  showNotification = false;
  constructor(
    private authService: AdminAuthService,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.authService.autoAuth();
    this.sharedService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
    this.sharedService.sentMessage.subscribe((message: string) => {
      if (message != '') {
        this.showNotification = true;
      } else this.showNotification = false;
    });
  }
}
