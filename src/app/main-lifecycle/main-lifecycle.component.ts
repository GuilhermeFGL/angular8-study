import { Component, OnInit } from '@angular/core';
import { Client } from './client.module';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  private foods: string[] = ['Rice', 'Beans', 'Meat'];
  private clients: Client[] = [];
  private name: string;
  private age: number;
  private food: string;
  private editClient: number = -1;

  constructor() { }

  ngOnInit() {
  }

  save() {
    if (this.editClient == -1) {
      this.clients.push({ name: this.name, age: this.age, food: this.food });
    } else {
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1;
    }
    this.name = '';
    this.age = null;
    this.food = '';
  }

  remove(index: number) {
    this.clients.splice(index, 1);
  }

  edit(index: number) {
    this.name = this.clients[index].name;
    this.age = this.clients[index].age;
    this.food = this.clients[index].food;
    this.editClient = index;
  }

}
