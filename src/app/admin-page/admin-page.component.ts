import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  designsSelected = '';
  ordersSelected = '';
  aboutSelected = '';
  contactSelected = '';
  constructor() { }

  ngOnInit() {
  }

  pageChange(page: string) {
    if (page == "designs") {
      this.designsSelected = 'rgb(255, 248, 150)';
      this.ordersSelected = '';
      this.aboutSelected = '';
      this.contactSelected = '';
    } else if (page == "orders") {
      this.designsSelected = "";
      this.ordersSelected = 'rgb(255, 248, 150)';
      this.aboutSelected = '';
      this.contactSelected = '';
    } else if (page == 'about') {
      this.designsSelected = '';
      this.ordersSelected = '';
      this.aboutSelected = 'rgb(255, 248, 150)';
      this.contactSelected = '';
    } else if (page == 'contact') {
      this.designsSelected = '';
      this.ordersSelected = '';
      this.aboutSelected = '';
      this.contactSelected = 'rgb(255, 248, 150)';
    }
  }
}
