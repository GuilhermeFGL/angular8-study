import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit {

  name = '';
  newName = '';
  nameIntercepting = '';

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.newName = this.name;
    console.log('Name: ' + this.name);
  }

}
