import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products!: Product[];

  constructor(private productsService: ProductsService) {
    this.getData();
  }

  async getData() {
    this.products = await this.productsService.getProducts();
  }
}
