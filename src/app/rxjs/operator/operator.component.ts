import { Component, OnInit, ViewChild } from '@angular/core';
import { from, Observable, Observer, fromEvent, interval, timer } from 'rxjs';
import { map, delay, filter, tap, take, first, last, debounceTime, takeWhile, takeUntil } from 'rxjs/operators';
import { MatRipple, RippleRef } from '@angular/material';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  @ViewChild(MatRipple, { static: false }) matRipple: MatRipple;

  input: number[] = [1, 2, 3, 4, 5];
  outputs: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  launchRipple() {
    this.matRipple
      .launch({ persistent: true, centered: true })
      .fadeOut();
  }

  clear() {
    this.outputs = [];
  }

  mapClick() {
    this.clear();
    from(this.input)
      .pipe(
        map(i => `Number: ${i.toString()}`),
      ).subscribe(i => this.outputs.push(i));
  }

  delayClick() {
    this.clear();
    from(this.input)
      .pipe(
        map(i => i.toString()),
        delay(1000)
      ).subscribe(i => this.outputs.push(i));
  }

  filterClick() {
    this.clear();
    from(this.input)
      .pipe(
        filter(i => i % 2 === 0),
        map(i => i.toString())
      ).subscribe(i => this.outputs.push(i));
  }

  tapClick() {
    this.clear();
    from(this.input)
      .pipe(
        map(i => i.toString()),
        tap(i => this.outputs.push(i))
      ).subscribe();
  }

  takeClick() {
    this.clear()
    from(this.input)
      .pipe(
        map(i => i.toString()),
        take(5))
      .subscribe(i => this.outputs.push(i));
  }

  firstClick() {
    this.clear()
    from(this.input)
      .pipe(
        map(i => i.toString()),
        first())
      .subscribe(i => this.outputs.push(i));
  }

  lastClick() {
    this.clear()
    from(this.input)
      .pipe(
        map(i => i.toString()),
        last()
      ).subscribe(i => this.outputs.push(i));
  }

  takeWhileClick() {
    this.clear();
    interval(500)
      .pipe(
        map(i => i.toString()),
        takeWhile((value, index) => index <= this.input.length)
      ).subscribe(i => this.outputs.push(i));
  }

  takeUntilClick() {
    this.clear();
    let dueTime = timer(2500);
    interval(500)
      .pipe(
        map(i => i.toString()),
        takeUntil(dueTime)
      ).subscribe(i => this.outputs.push(i));
  }

  debounceTimeClick() {
    this.clear();
    fromEvent(document, 'click')
      .pipe(debounceTime(1000))
      .subscribe(() => this.launchRipple());
  }

}
