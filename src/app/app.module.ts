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
import { AppRoutingModule } from './app-routing-module';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ContactComponent } from './contact/contact.component';
import { DesignsComponent } from './admin-page/designs/designs.component';
import { DesignListComponent } from './admin-page/design-list/design-list.component';
import { DesignEditComponent } from './admin-page/design-edit/design-edit.component';
import { NewDesignComponent } from './admin-page/new-design/new-design.component';
import { ContactEditComponent } from './admin-page/contact-edit/contact-edit.component';
import { AboutEditComponent } from './admin-page/about-edit/about-edit.component';

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
    LogInFormComponent,
    ContactComponent,
    DesignsComponent,
    DesignListComponent,
    DesignEditComponent,
    NewDesignComponent,
    ContactEditComponent,
    AboutEditComponent,
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