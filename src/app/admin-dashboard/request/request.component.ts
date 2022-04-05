import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  selectedTap = 'tap1';
  requests = [
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
    {
      date: '30 Jan 2022,02:00 pm',
      info: {
        name: 'Ahmed Khalil',
        email: 'Ahmed@example.com',
      },
      miner: 'Antminer E9',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
