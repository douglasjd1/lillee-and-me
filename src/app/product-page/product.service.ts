import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [new Product("1234", "Beautiful Green Aura in Alaska", "This is an example product", "$10.50", "../../../assets/image/example-image.jpg", "medium"),
                         new Product("4321", "Example Product", "This is an example product", "$11.00", "../../../assets/image/example-image.jpg", "medium")
  ];

  getProduct(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].getId() == id) {
        return this.products[i];
      }
    }
  }
  
  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(product: Product) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].getId() == product.getId()) {
        this.products.splice(i);
      }
    }
  }
}
