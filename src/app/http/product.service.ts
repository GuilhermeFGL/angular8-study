import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly URL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}/products`);
  }

  getProductsError(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}/productserr`);
  }

  getProductsDelay(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}/productsdelay`);
  }

  getProductsId(): Observable<string[]> {
    return this.http.get<string[]>(`${this.URL}/products_ids`);
  }

  getProductName(id: string): Observable<string> {
    return this.http.get(`${this.URL}/products/name/${id}`,
      { responseType: "text" });
  }

  saveProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(`${this.URL}/products`, p);
  }

  deleteProduct(p: Product) {
    return this.http.delete(`${this.URL}/products/${p._id}`)
  }

  editProduct(p: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.URL}/products/${p._id}`, p);
  }
}
