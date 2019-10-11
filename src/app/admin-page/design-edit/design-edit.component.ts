import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product-page/product.model';
import { ProductService } from 'src/app/product-page/product.service';

@Component({
  selector: 'app-design-edit',
  templateUrl: './design-edit.component.html',
  styleUrls: ['./design-edit.component.css']
})
export class DesignEditComponent implements OnInit {
  @Input() design: Product;
  name: string;
  des: string;
  price: string;
  size: string;

  constructor(private route: ActivatedRoute, private ps: ProductService) {
    
   }

  ngOnInit() {
    
    
    this.name = this.design.getName();
    this.des = this.design.getDes();
    this.price = this.design.getPrice();
    this.size = this.design.getSize();
  }

  saveDesign() {
    this.ps.updateProduct(this.design.getId(), this.name, this.des, this.price, this.size);
  }

}
