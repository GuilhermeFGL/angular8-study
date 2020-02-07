import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  output: string;
  clientForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    contact: new FormGroup({
      phone: new FormControl(''),
      email: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.output = JSON.stringify(this.clientForm.value);
  }

}
