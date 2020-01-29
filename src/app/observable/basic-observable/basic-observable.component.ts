import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.css']
})
export class BasicObservableComponent implements OnInit {

  output: string[] = [];
  asynchronousSubscription: Subscription;
  coldObservableSubscription1: Subscription;
  coldObservableSubscription2: Subscription;

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.output = [];
    if (this.asynchronousSubscription) {
      this.asynchronousSubscription.unsubscribe();
    }
    if (this.coldObservableSubscription1) {
      this.coldObservableSubscription1.unsubscribe();
    }
    if (this.coldObservableSubscription2) {
      this.coldObservableSubscription2.unsubscribe();
    }
  }

  basic() {
    this.clear();
    const observable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
      }
    );
    observable.subscribe(
      (n: number) => this.output.push(n.toString()),
      (error) => this.output.push(error),
      () => this.output.push("complete")
    ).unsubscribe();
  }

  asynchronous() {
    this.clear();

    const observable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          this.output.push(`From observable: ${i}`)
          if (i == 10) {
            observer.complete();
          } else if (i % 2 == 0) {
            observer.next(1);
          }
        }, 500);
        return () => {
          clearInterval(id);
        };
      }
    );

    this.asynchronousSubscription = observable.subscribe(
      (n) => { },
      (error) => { this.output.push(error) },
      () => { this.output.push('Complete') });
  }

  coldObservable() {
    this.clear();

    const observable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          this.output.push(`From observable: ${i}`)
          if (i == 10) {
            observer.complete();
          } else if (i % 2 == 0) {
            observer.next(1);
          }
        }, 500);
        return () => {
          clearInterval(id);
        };
      }
    );

    this.output.push('Cold Observable 1');
    this.coldObservableSubscription1 = observable.subscribe(
      (n) => { },
      (error) => { this.output.push(error) },
      () => { this.output.push('Complete 1') });

    this.output.push('Cold Observable 2');
    let interval = setInterval(() => {
      this.coldObservableSubscription2 = observable.subscribe(
        (n) => { },
        (error) => { this.output.push(error) },
        () => { this.output.push('Complete 2') });
      clearInterval(interval);
    }, 300);

  }
}
