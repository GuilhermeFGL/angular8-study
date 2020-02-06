import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {

  simpleRequestProduct$: Observable<Product[]>;
  productsErrorHandling: Product[];
  productsLoading: Product[];
  productsId: Product[];
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
      .subscribe((prods) => { this.productsErrorHandling = prods },
        (err) => {
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          if (err.status === 0) {
            this.snackBar.open('Could not connect to the server', '', config);
          } else {
            this.snackBar.open(err.error.msg, '', config);
          }
        });
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

}
