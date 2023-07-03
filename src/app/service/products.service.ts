import { Injectable } from '@angular/core';
import Api from '../helpers/api';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  token!: any;

  constructor(private localStorage: LocalStorageService) {
    this.token = this.localStorage.get('token');
  }

  public async getProducts() {
    const response = await Api("/products", "GET", this.token)
    return response;
  }

  public async getProductById(id: String) {
    const response = await Api(`/products/${id}`, "GET", this.token)
    return response;
  }
}
