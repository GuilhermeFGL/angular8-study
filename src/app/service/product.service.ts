import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  nextId: number;
  products: Product[] = [];
  private dataFromService: any[] = [
    { id: 1, name: 'Laptop', department_id: 3, price: 40, description: 'Laptop Description' },
    { id: 2, name: 'Shirt', department_id: 1, price: 10, description: 'Shirt Description' }
  ];

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService: DepartmentService) {
    this.dataFromService.forEach(d => {
      this.products.push({
        id: d.id,
        name: d.name,
        department: departmentService.getDepartmentByd(d.department_id),
        price: d.price,
        description: d.description
      });
      this.nextId = d.id + 1;
    });
  }

  getProducts(): Product[] {
    console.log(this.products);
    return this.products;
  }
  
  addProduct(product: Product) {
    let newProduct:Product = {...product, id: this.nextId++};
    this.products.push(newProduct);
    this.onNewProduct.emit(newProduct);
  }

}
