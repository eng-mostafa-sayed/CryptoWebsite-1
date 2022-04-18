import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';
import { AdminDashboardService } from '../admin-dashboard.service';
import { Request } from '../models/buy-request.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  selectedTap = 'tap1';
  requests: Request[] = [];
  requestsLength: number;
  acceptForm: FormGroup;
  acceptFormOpend = false;
  selectedcontactId: string;
  // [
  //   {
  //     date: '30 Jan 2022,02:00 pm',
  //     info: {
  //       name: 'Ahmed Khalil',
  //       email: 'Ahmed@example.com',
  //     },
  //     miner: 'Antminer E9',
  //   },
  // ];
  constructor(
    private dashboardService: AdminDashboardService,
    private sharedSerivce: SharedService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getRequests().subscribe({
      next: (res) => {
        this.requests = res;
        this.requestsLength = this.requests.length;
      },
    });
    this.acceptForm = new FormGroup({
      address: new FormControl(null),
      workerID: new FormControl(null),
    });
  }
  getAddress(request: Request) {
    this.sharedSerivce.isLoading.next(true);
    if (request._id) {
      this.selectedcontactId = request._id;
    }
    this.dashboardService.getAddress(request.asicID).subscribe({
      next: (res) => {
        this.acceptForm.setValue({
          address: res.address,
          workerID: '',
        });
        this.acceptFormOpend = true;
        this.sharedSerivce.isLoading.next(false);
      },
    });
  }
  onAcceptReq() {
    if (this.acceptForm.valid) {
      const address = this.acceptForm.value.address;
      const workerID = this.acceptForm.value.workerID;
      this.dashboardService
        .acceptRequest(this.selectedcontactId, address, workerID)
        .subscribe({
          next: () => {
            this.acceptFormOpend = false;
            this.sharedSerivce.sentMessage.next('Contract has been approved');
          },
        });
    }
  }
}
