import { Component, OnInit } from '@angular/core';
import { Observable, throwError, timer, Observer } from 'rxjs';
import { map, tap, catchError, retryWhen, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  started: boolean = false;
  output: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.started = true;
    new Observable((observer: Observer<any>) => {
      for (let i = 0; i < 10; i++) {
        if (i == 7) {
          observer.error(`An error occurred when i = ${i}`);
        } else {
          observer.next(i);
        }
      }
    }).pipe(
      map(i => i * 10),
      tap(i => this.output.push('Before error handling: ' + i)),
      catchError(error => {
        this.output.push('Inside catchError: ', error);
        return throwError('throwError: Error');
      }),
      retryWhen(i => timer(5000))
    ).subscribe(
      i => this.output.push('Normal output: ' + i),
      err => this.output.push(err),
      () => this.output.push('Completed!'));
  }

}
