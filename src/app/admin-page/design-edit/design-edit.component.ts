import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/product-page/product.model';
import { ProductService } from 'src/app/product-page/product.service';

@Component({
  selector: 'app-design-edit',
  templateUrl: './design-edit.component.html',
  styleUrls: ['./design-edit.component.css']
})
export class DesignEditComponent implements OnInit {
  design: Product;
  productService: ProductService = new ProductService();
  name: string;
  price: string;
  size: string;
  des: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.design = this.productService.getProduct(params['id']);
        this.name = this.design.getName();
        this.price = this.design.getPrice();
        this.size = this.design.getSize();
        this.des = this.design.getDes();
      }
    );
  }

  saveDesign() {
    this.productService.updateProduct(this.design.getId(), this.name, this.des, this.price, this.size);
  }

}
