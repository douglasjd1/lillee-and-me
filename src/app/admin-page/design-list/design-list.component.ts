import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product-page/product.model';
import { ProductService } from 'src/app/product-page/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-design-list',
  templateUrl: './design-list.component.html',
  styleUrls: ['./design-list.component.css']
})
export class DesignListComponent implements OnInit {
  designs: Product[];
  constructor(private router: Router, private ps: ProductService) { 
    
   }

  ngOnInit() {
    this.designs = this.ps.getAllProducts();
  }
  setDesignToEdit(id: string) {
    var p = this.ps.getProduct(id);
    this.ps.setDesignToEditEvent.emit(p);
  }
  
  toNewDesign() {
    this.router.navigate(['admin', 'new-design']);
  }
}
