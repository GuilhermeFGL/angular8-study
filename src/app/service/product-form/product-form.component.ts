import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { ProductService } from '../product.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  price: number;
  description: string;
  department: Department;
  departments: Department[];

  constructor(private productService: ProductService,
    private departmentService: DepartmentService) {
    this.departments = departmentService.getDepartments();
  }

  ngOnInit() {
  }

  save() {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    })
    this.clear();
  }

  clear() {
    this.name = '';
    this.price = null;
    this.description = '';
    this.department = null;
  }

}
