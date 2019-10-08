import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product-page/product.model';
import { ProductService } from 'src/app/product-page/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-design',
  templateUrl: './new-design.component.html',
  styleUrls: ['./new-design.component.css']
})
export class NewDesignComponent implements OnInit {
  name: string;
  price: string;
  size: string;
  des: string;
  photo: string;
  ps = new ProductService();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveDesign() {
    this.ps.addProduct(this.name, this.des, this.size, this.price);
    this.router.navigate(['admin', 'designs']);
  }
}
