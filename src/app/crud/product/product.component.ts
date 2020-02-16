import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { DepartmentService } from '../department.service';
import { Product } from '../product';
import { Department } from '../department';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('form', { static: false }) form: NgForm;

  productForm: FormGroup = this.fb.group({
    _id: [null],
    name: ['', [Validators.required]],
    stock: [null, [Validators.required, Validators.min(0)]],
    price: [null, [Validators.required, Validators.min(0)]],
    departments: [[], [Validators.required]]
  });

  products: Product[] = [];
  departments: Department[] = [];

  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.productService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((products) => this.products = products);
    this.departmentService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((departments) => this.departments = departments);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  save() {
    let product = this.productForm.value;
    if (product._id != null) {
      this.productService.update(product)
        .subscribe((updatedProduct) => {
          this.notify("Product Updated!");
          this.resetForm();
        }, (error) => {
          this.notify('Error');
        });
    } else {
      this.productService.add(product)
        .subscribe((newProduct) => {
          this.notify("Product Inserted!");
          this.resetForm();
        }, (error) => {
          this.notify('Error');
        });
    }
  }

  delete(product: Product) {
    this.productService.delete(product)
      .subscribe(
        () => this.notify("Product Deleted!"),
        (error) => {
          this.notify('Error');
        });
  }

  edit(product: Product) {
    this.productForm.setValue(product);
  }

  private notify(msg: string) {
    this.snackbar.open(msg, "OK", { duration: 3000 });
  }

  private resetForm() {
    this.form.resetForm();
  }

}
