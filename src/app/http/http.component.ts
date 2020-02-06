import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  simpleRequestProduct$: Observable<Product[]>;
  productsErrorHandling: Product[] = [];
  productsLoading: Product[] = [];
  productsId: Product[] = [];
  newlyProducts: Product[] = [];
  productsToDelete: Product[] = [];
  isLoading: boolean = false;

  constructor(private productService: ProductService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  simpleHttpGet() {
    this.simpleRequestProduct$ = this.productService.getProducts();
  }

  getProductsErrorHandlingOk() {
    this.productService.getProductsDelay()
      .subscribe((prods) => {
        this.productsErrorHandling = prods;
        let config = new MatSnackBarConfig();
        config.duration = 2000;
        this.snackBar.open('Products successfuly loaded', '', config);
      });
  }

  getProductsErrorHandlingError() {
    this.productService.getProductsError()
      .subscribe(
        (prods) => { this.productsErrorHandling = prods },
        (err) => { this.showErrorMessage(err); });
  }

  getProductsLoading() {
    this.isLoading = true;
    this.productService.getProductsDelay()
      .subscribe((prods) => {
        this.productsLoading = prods;
        this.isLoading = false
      }, (err) => this.isLoading = false);
  }

  getProductsId() {
    this.productService.getProductsId()
      .subscribe((ids) => {
        this.productsId = ids.map((id) => ({
          _id: id,
          name: '',
          department: '',
          price: null
        }));
      });
  }

  getProductName(prodId: string) {
    this.productService.getProductName(prodId).subscribe((prodName: string) => {
      let index = this.productsId.findIndex(p => p._id === prodId);
      if (index >= 0) {
        this.productsId[index].name = prodName;
      }
    });
  }

  postProduct(name: string, department: string, price: number) {
    let newProduct: Product = { name, department, price };
    this.productService.saveProduct(newProduct).subscribe(
      (prod: Product) => { this.newlyProducts.push(prod); },
      (err) => { this.showErrorMessage(err); });
  }

  getProductsToDelete() {
    this.productService.getProducts().subscribe((prods) => this.productsToDelete = prods);
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(
      () => {
        let index = this.productsToDelete.findIndex((p) => p._id === product._id);
        if (index >= 0) {
          this.productsToDelete.splice(index);
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          this.snackBar.open('Products successfuly loaded', '', config);
        }
      }, (error) => this.showErrorMessage(error));
  }

  private showErrorMessage(err: HttpErrorResponse) {
    let config = new MatSnackBarConfig();
    config.duration = 2000;
    if (err.status === 0) {
      this.snackBar.open('Could not connect to the server', '', config);
    }
    else {
      this.snackBar.open(err.error.msg, '', config);
    }
  }

}
