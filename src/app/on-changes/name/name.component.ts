import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit, OnChanges {

  @Input() name: string;
  nameBefore: string;
  
  @Input() set nameIntercepting(name: string) {
    this.name = name;
  }
  get nameIntercepting() {
    return this.name;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.hasOwnProperty('name')) {
      this.nameBefore = changes['name'].previousValue;
    }
    if (changes.hasOwnProperty('nameIntercepting')) {
      this.nameBefore = changes['nameIntercepting'].previousValue;
    }
  }

}
