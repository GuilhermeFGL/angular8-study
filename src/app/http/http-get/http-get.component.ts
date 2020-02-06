import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {

  simpleRequestProduct$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  simpleHttpGet() {
    this.simpleRequestProduct$ = this.productService.getProducts();
  }

}
