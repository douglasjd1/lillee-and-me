import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  products: Product[];
  constructor(private route: ActivatedRoute, private ps: ProductService) { }

  ngOnInit() {
    this.products = this.ps.getAllProducts();

    this.route.params.subscribe(
      (params: Params) => {
        this.product = this.products[params['id']];
      }
    );
  }
}
