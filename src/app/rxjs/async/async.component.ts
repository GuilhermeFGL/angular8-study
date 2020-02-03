import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';

interface User {
  login: string;
  name: string;
}

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  started: boolean = false;
  private options$: Observable<string[]>;
  private user$: Observable<User>;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.started = true;
    this.user$ = new Observable<User>((observer) => {
      let names = ["Mr. James", "Mr. John", "Mr. Ray", "Ms. Angel"];
      let logins = ["james", "john", "ray", "angel"];
      let i = 0;
      setInterval(() => {
        if (i < 4) {
          observer.next({ login: logins[i], name: names[i] });
        } else {
          observer.complete();
        }
        i++;
      }, 1000);
    });
  }

}
