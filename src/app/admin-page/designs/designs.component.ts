import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product-page/product.model';
import { ProductService } from 'src/app/product-page/product.service';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {
  designToEdit: Product;
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.ps.setDesignToEditEvent.subscribe((product: Product) => {
      console.log('event caught');
      this.designToEdit = product;
    });
  }

}
