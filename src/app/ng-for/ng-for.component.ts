import { Component, OnInit } from '@angular/core';
import { GenderEnum } from './gender-enum';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  name: string;
  gender: GenderEnum;
  persons = [
    { name: 'Ana', gender: GenderEnum.F },
    { name: 'Jhon', gender: GenderEnum.M },
    { name: 'Sa', gender: GenderEnum.F },
    { name: 'Bro', gender: GenderEnum.M }
  ];
  genderKeys = [GenderEnum.F, GenderEnum.M];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.persons.push({
      name: this.name,
      gender: this.gender
    });
    this.cancel();
  }

  cancel() {
    this.name = '';
    this.gender = null;
  }

}
