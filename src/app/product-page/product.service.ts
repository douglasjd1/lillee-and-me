import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [new Product('0', 'Example Product', 'This is an example product', '$15.00', "../../assets/image/example-image.jpg", 'md')];

  getProduct(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].getId() == id) {
        return this.products[i];
      }
    }
  }
  
  getAllProducts() {
    return this.products;
  }

  addProduct(name: string, des: string, size: string, price: string) {
    var id = this.products.length + 1;
    this.products.push(new Product(id.toString(), name, des, price, '', size));
  }

  deleteProduct(product: Product) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].getId() == product.getId()) {
        this.products.splice(i);
      }
    }
  }

  updateProduct(id: string, name: string, des: string, price: string, size: string) {
    var product: Product = this.getProduct(id);
    product.setName(name);
    product.setDes(des);
    product.setPrice(price);
    product.setSize(size);
  }
}
