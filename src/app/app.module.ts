import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-page/product-list/product-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { OrdersComponent } from './admin-page/orders/orders.component';
import { OrderListComponent } from './admin-page/order-list/order-list.component';
import { OrderDetailComponent } from './admin-page/order-detail/order-detail.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductFilterComponent } from './product-page/product-filter/product-filter.component';
import { ProductDetailComponent } from './product-page/product-detail/product-detail.component';
import { NewProductFormComponent } from './admin-page/new-product-form/new-product-form.component';
import { AppRoutingModule } from './app-routing-module';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    AdminPageComponent,
    OrdersComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderFormComponent,
    AboutComponent,
    HomeComponent,
    ProductPageComponent,
    ProductFilterComponent,
    ProductDetailComponent,
    NewProductFormComponent,
    LogInFormComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }