import { Component, OnInit } from '@angular/core';
import { Client } from './client.module';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent implements OnInit {

  output: string;
  client: Client = {
    firstName: "", lastName: "", birthday: new Date(), gender: "",
    street: "", city: "", state: "", phone1: "", phone2: ""
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.output = JSON.stringify(this.client);
  }

}
