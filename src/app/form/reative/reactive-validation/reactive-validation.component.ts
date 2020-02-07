import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css']
})
export class ReactiveValidationComponent implements OnInit {

  clientForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: [''],
    birth: [new Date()],
    age: [0, [Validators.min(0), Validators.max(100)]],
    email: ['', [Validators.email]],
    street: [''],
    city: [''],
    state: ['', [Validators.minLength(2), Validators.maxLength(2)]],
    phone1: [''],
    phone2: [''],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
