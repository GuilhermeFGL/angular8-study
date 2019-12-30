import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: 'Jhow', role: 'admin', lastLogin: new Date('2/1/2020') },
    { login: 'Bro', role: 'user', lastLogin: new Date('3/1/2020') },
    { login: 'Ana', role: 'admin', lastLogin: new Date('4/1/2020') },
    { login: 'Sah', role: 'user', lastLogin: new Date('5/1/2020') }
  ];

  constructor() { }

  ngOnInit() {
  }

}
