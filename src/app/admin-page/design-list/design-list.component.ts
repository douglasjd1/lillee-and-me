import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product-page/product.model';
import { ProductService } from 'src/app/product-page/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-list',
  templateUrl: './design-list.component.html',
  styleUrls: ['./design-list.component.css']
})
export class DesignListComponent implements OnInit {
  designs: Product[];
  ps: ProductService = new ProductService();
  constructor(private router: Router) { }

  ngOnInit() {
    this.designs = this.ps.getAllProducts();
  }
  
  toNewDesign() {
    this.router.navigate(['admin', 'new-design']);
  }
}
