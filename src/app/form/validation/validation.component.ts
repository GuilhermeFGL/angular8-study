import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  age: number = null;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
