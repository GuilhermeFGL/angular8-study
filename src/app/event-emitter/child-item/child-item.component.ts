import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  incValue: number = 0;
  @Input() title: string;
  @Output() plusOne = new EventEmitter<any>();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();
  @Output() inc = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  plusOneClick() {
    this.plusOne.emit();
  }

  plusTwoClick() {
    this.plusTwo.emit();
  }

  minusOneClick() {
    this.minusOne.emit();
  }

  minusTwoClick() {
    this.minusTwo.emit();    
  }

  incCLick() {
    this.inc.emit(this.incValue);
  }

}
