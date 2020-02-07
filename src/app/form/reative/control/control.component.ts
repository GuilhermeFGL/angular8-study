import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  setFirstName() {
    this.firstName.setValue("Guilherme");
  }

}
