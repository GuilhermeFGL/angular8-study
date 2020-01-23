import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private nextId: number = 4;
  private departments: Department[] = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Techonology' }
  ];

  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  addDepartment(department: Department) {
    this.departments.push({ ...department, id: this.nextId++ });
  }

  getDepartmentByd(id: number): Department {
    return this.departments.find(department => department.id === id);
  }
}
