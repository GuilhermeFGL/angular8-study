import { Component, OnInit } from '@angular/core';
import { stat } from 'fs';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count = 0;
  enable = true;
  inputValue = '';

  constructor() { }

  ngOnInit() {
  }

  save() {
    alert('saved!');
  }

  inc() {
    this.count++;
  }

  cbChange(event) {
    this.enable = event.checked;
  }

  selectionChange(event) {
    console.log(event.value);
  }

}
