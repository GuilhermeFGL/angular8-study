import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  outputs: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.outputs = [];
  }

  mapClick() {
    this.clear();
    from([1, 2, 3, 4, 5])
      .pipe(
        map(i => `Number: ${i.toString()}`),
      ).subscribe(i => this.outputs.push(i));
  }


  delayClick() {
    this.clear();
    from([1, 2, 3, 4, 5])
      .pipe(
        map(i => i.toString()),
        delay(1000)
      ).subscribe(i => this.outputs.push(i));
  }

}
