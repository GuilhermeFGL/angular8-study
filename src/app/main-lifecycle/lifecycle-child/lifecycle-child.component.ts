import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { LifeCycleEvent } from './life-cycle-event.module';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  private interval = null;

  public events: LifeCycleEvent[] = []
  nextEventId: number = 0;
  color: string[] = ['accent', 'warn', 'primary'];

  constructor() {
    this.newEvent("constructor")
    console.log(this.name + " - constructor");
  }

  ngOnInit() {
    this.newEvent("ngOnInit")
    console.log(this.name + " - ngOnInit");
  }

  ngAfterViewInit() {
    this.newEvent("ngAfterViewInit")
    console.log(this.name + " - ngAfterViewInit");
  }

  ngOnDestroy() {
    this.newEvent("ngOnDestroy")
    console.log(this.name + " - ngOnDestroy");

    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  ngAfterContentInit() {
    this.newEvent("ngOnDestroy")
    console.log(this.name + " - ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges) {
    this.newEvent("ngOnChanges")
    console.log(this.name + " - ngOnChanges");
    console.log(changes);
  }

  newEvent(name: string) {
    let id = this.nextEventId++;
    this.events.push({ id: id, color: this.color[id % this.color.length], name: name });

    this.interval = setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id == id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length * 2000);
  }

}
