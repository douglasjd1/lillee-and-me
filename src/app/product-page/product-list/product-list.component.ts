import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productService = new ProductService();
  products: Product[] = [];
  
  constructor() { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}
