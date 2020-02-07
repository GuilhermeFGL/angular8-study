import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  output: string;
  clientForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: ['']
    })
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    this.output = JSON.stringify(this.clientForm.value);
  }

}
