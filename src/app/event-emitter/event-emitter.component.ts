import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {

  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  inc(event) {
    this.value += event;
  }

  incBy(value: number) {
    this.value += value;
  }

}
