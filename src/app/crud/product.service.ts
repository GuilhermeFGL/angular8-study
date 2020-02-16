import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { DepartmentService } from './department.service';
import { Product } from './product';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly URL = 'http://localhost:3000/products';

  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);
  private loaded: boolean = false;

  constructor(
    private http: HttpClient,
    private deparmentService: DepartmentService) { }

  get(): Observable<Product[]> {
    if (!this.loaded) {
      combineLatest(
        this.http.get<Product[]>(this.URL),
        this.deparmentService.get())
        .pipe(
          filter(([products, departments]) => products != null && departments != null),
          map(([products, departments]) => {
            for (let product of products) {
              let ids = (product.departments as string[]);
              product.departments = ids.map((id) => departments.find(dep => dep._id == id));
            }
            return products;
          }),
        ).subscribe(this.productsSubject$);
      this.loaded = true;
    }
    return this.productsSubject$.asObservable();
  }

  add(product: Product): Observable<Product> {
    let departments = (product.departments as Department[]).map(d => d._id);
    return this.http.post<Product>(this.URL, { ...product, departments })
      .pipe(
        tap((newProduct) => {
          this.productsSubject$.getValue()
            .push({ ...newProduct, departments: product.departments })
        })
      );
  }

  update(product: Product): Observable<Product> {
    let departments = (product.departments as Department[]).map(d => d._id);
    return this.http.patch<Product>(`${this.URL}/${product._id}`, { ...product, departments })
      .pipe(
        tap(() => {
          let products = this.productsSubject$.getValue();
          let index = products.findIndex(p => p._id === product._id);
          if (index >= 0)
            products[index] = product;
        })
      );
  }

  delete(product: Product): Observable<any> {
    return this.http.delete(`${this.URL}/${product._id}`)
      .pipe(
        tap(() => {
          let products = this.productsSubject$.getValue();
          let index = products.findIndex(p => p._id === product._id);
          if (index >= 0)
            products.splice(index, 1);
        })
      );
  }

}
