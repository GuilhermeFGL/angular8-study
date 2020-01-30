import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-map-delay',
  templateUrl: './map-delay.component.html',
  styleUrls: ['./map-delay.component.css']
})
export class MapDelayComponent implements OnInit {

  outputs: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  mapClick() {
    from([1, 2, 3, 4, 5])
      .pipe(
        map(i => `Number: ${i.toString()}`),
        delay(1000)
      ).subscribe(i => this.outputs.push(i));
  }

}
