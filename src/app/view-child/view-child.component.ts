import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild("stopwatch2", {static: false}) private myTimer: TimerComponent;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.myTimer.start()
  }

  stop() {
    this.myTimer.stop()
  }

  clear() {
    this.myTimer.clear()
  }

}
