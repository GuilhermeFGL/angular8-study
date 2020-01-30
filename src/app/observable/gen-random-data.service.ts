import { Injectable } from '@angular/core';
import { ConnectableObservable, Observable, Observer } from 'rxjs';
import { DataModel } from './data.model';
import { publish } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenRandomDataService {

  public dataObservable: ConnectableObservable<DataModel>;

  constructor() {
    this.dataObservable = new Observable(
      (observer: Observer<DataModel>) => {
        let n = 0;
        let f = () => {
          n++;
          if (n <= 10) {
            let timestamp = Math.round(Math.random() * 2000 + 500);
            observer.next({ timestamp: timestamp, data: n });
            setTimeout(f, timestamp);
          }
          else
            observer.complete();
        }
        f();
      }
    ).pipe(publish()) as ConnectableObservable<DataModel>;
  }
}
