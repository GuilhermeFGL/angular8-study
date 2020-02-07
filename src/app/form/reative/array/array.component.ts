import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  output: string;
  clientForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: ['']
    }), phones: this.formBuilder.array(['']),
    children: this.formBuilder.array([
      this.formBuilder.group({
        name: [''],
        age: ['']
      })])
  });
  phones: FormArray = this.clientForm.get('phones') as FormArray;
  children: FormArray = this.clientForm.get('children') as FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  addPhone() {
    this.phones.push(this.formBuilder.control(''));
  }

  addChild() {
    this.children.push(
      this.formBuilder.group({
        name: [''],
        age: ['']
      }));
  }

  submit() {
    this.output = JSON.stringify(this.clientForm.value);
  }

}
