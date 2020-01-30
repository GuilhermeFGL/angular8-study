import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Observer, Subscription, fromEvent, ConnectableObservable } from 'rxjs';
import { publish, share } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  @ViewChild('hotBtn', { static: false }) hotBtn: ElementRef;

  output: string[] = [];
  asynchronousSubscription: Subscription;
  coldObservableSubscription1: Subscription;
  coldObservableSubscription2: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.hotObservable();
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
          this.output.push(`From observable: ${i}`);
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
          this.output.push(`From observable: ${i}`);
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

  hotObservable() {
    fromEvent(
      this.hotBtn.nativeElement, 'click').subscribe((e) => {
        this.clear();
        this.output.push("Hot Observable");
      });
  }

  myPublish() {
    const observable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          this.output.push(`From publish: ${i}`);
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

    const multcasted: ConnectableObservable<number> = observable.pipe(publish()) as ConnectableObservable<number>;

    this.output.push('waiting for interval...');
    let interval = setTimeout(() => {
      multcasted.connect();
      multcasted.subscribe((_n) => {
        this.output.push('connected');
      });
      clearInterval(interval);
    }, 300);
  }

  myShare() {
    const observable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          this.output.push(`From share: ${i}`);
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

    const multcasted: ConnectableObservable<number> = observable.pipe(share()) as ConnectableObservable<number>;

    this.output.push('waiting for interval...');
    let interval = setTimeout(() => {
      multcasted.subscribe((_n) => {
        this.output.push('connected');
      });
      clearInterval(interval);
    }, 300);
  }

}