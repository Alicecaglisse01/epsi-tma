import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Produit } from "../../models/produit/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:8000/api/product/';

  constructor(private http: HttpClient) { }

  removeProduct(product: Produit): Observable<any> {
    return this.http.delete(this.url + product.id);
  }

  modifyProduct(product: Produit): Observable<any> {
    return this.http.put<Produit>(this.url + product.id, product.serialize());
  }

  getallProduct(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url);
  }

  createProduct(produit: Produit): Observable<any> {
    return this.http.post<Produit>(this.url, produit.serialize());
  }
}
