import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person/person.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string;
  @Input('prefix') title: string;

  persons: Person[];

  constructor() { 
    this.persons = [
      {name: 'Jhow', age: 21},
      {name: 'Bob', age: 30},
      {name: 'Sah', age: 18},
      {name: 'ana', age: 35}
    ];
  }

  ngOnInit() {
  }

}
