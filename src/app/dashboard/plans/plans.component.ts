import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Plan {
  date: string;
  name: string;
  total: number;
  current: number;
  average: number;
  expire: string;
}

const activePlanData: Plan[] = [
  {
    date: '30 Dec 2021',
    name: 'Bitcoin — Starter  ',
    total: 4.0026,
    current: 4.0026,
    average: 4.0026,
    expire: '30 Dec 2022',
  },
  {
    date: '14 March 2021',
    name: 'Ethereum — Starter  ',
    total: 6.941,
    current: 6.941,
    average: 6.941,
    expire: '14 March 2022',
  },
  {
    date: '5 Nov 2021',
    name: 'Ethereum — Starter',
    total: 9.0122,
    current: 9.0122,
    average: 9.0122,
    expire: '5 Nov 2022',
  },
  {
    date: '5 Sep 2021',
    name: 'Ethereum — Starter',
    total: 10.811,
    current: 10.811,
    average: 10.811,
    expire: '5 Sep 2022',
  },
  {
    date: '1 Oct 2021',
    name: 'Ethereum — Starter',
    total: 12.0107,
    current: 12.0107,
    average: 12.0107,
    expire: '1 Oct 2022',
  },
  {
    date: '6 Feb 2021',
    name: 'Bitcoin — Starter',
    total: 14.0067,
    current: 14.0067,
    average: 14.0067,
    expire: '6 Feb 2022',
  },
  {
    date: '8 Jul 2021',
    name: 'Ethereum — Starter',
    total: 15.9994,
    current: 15.9994,
    average: 15.9994,
    expire: '8 Jul 2022',
  },
  {
    date: '18 Oct 2021',
    name: 'Bitcoin — Starter',
    total: 18.9984,
    current: 18.9984,
    average: 18.9984,
    expire: '12 Jan 2022',
  },
];

const expiredPlanData: Plan[] = [
  {
    date: '10 Jan 2021',
    name: 'Bitcoin — Starter',
    total: 1.0079,
    current: 1.0079,
    average: 1.0079,
    expire: '10 Jan 2022',
  },
  {
    date: '30 Dec 2021',
    name: 'Bitcoin — Starter  ',
    total: 4.0026,
    current: 4.0026,
    average: 4.0026,
    expire: '30 Dec 2022',
  },
  {
    date: '14 March 2021',
    name: 'Ethereum — Starter  ',
    total: 6.941,
    current: 6.941,
    average: 6.941,
    expire: '14 March 2022',
  },
  {
    date: '5 Nov 2021',
    name: 'Ethereum — Starter',
    total: 9.0122,
    current: 9.0122,
    average: 9.0122,
    expire: '5 Nov 2022',
  },
  {
    date: '5 Sep 2021',
    name: 'Ethereum — Starter',
    total: 10.811,
    current: 10.811,
    average: 10.811,
    expire: '5 Sep 2022',
  },
];
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'date',
    'name',
    'total',
    'current',
    'average',
    'expire',
  ];
  activePlanDataLength: number = activePlanData.length;
  expiredPlanDataLength: number = expiredPlanData.length;

  dataSourceActive = new MatTableDataSource(activePlanData);
  dataSourceExpired = new MatTableDataSource(expiredPlanData);

  @ViewChild('activePaginator') activePaginator: MatPaginator;
  @ViewChild('expiredPaginator') expiredPaginator: MatPaginator;
  @ViewChild('activeSort') activeSort: MatSort;
  @ViewChild('expiredSort') expiredSort: MatSort;

  constructor() {}
  ngOnInit(): void {
    this.dataSourceActive.filterPredicate = function (
      data,
      filter: string
    ): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    this.dataSourceExpired.filterPredicate = function (
      data,
      filter: string
    ): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    this.dataSourceActive.paginator = this.activePaginator;
    this.dataSourceActive.sort = this.activeSort;
    this.dataSourceExpired.paginator = this.expiredPaginator;
    this.dataSourceExpired.sort = this.expiredSort;
  }

  ngAfterViewInit() {
    this.dataSourceActive.paginator = this.activePaginator;
    this.dataSourceActive.sort = this.activeSort;
    this.dataSourceExpired.paginator = this.expiredPaginator;
    this.dataSourceExpired.sort = this.expiredSort;
  }

  applyFilterOnActive(event: Event) {
    const activeFilterValue = (event.target as HTMLInputElement).value;
    this.dataSourceActive.filter = activeFilterValue.trim().toLowerCase();

    if (this.dataSourceActive.paginator) {
      this.dataSourceActive.paginator.firstPage();
    }
  }
  applyFilterOnExpired(event: Event) {
    const expiredFilterValue = (event.target as HTMLInputElement).value;
    this.dataSourceExpired.filter = expiredFilterValue.trim().toLowerCase();

    if (this.dataSourceExpired.paginator) {
      this.dataSourceExpired.paginator.firstPage();
    }
  }
}
