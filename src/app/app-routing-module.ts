import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutComponent } from './about/about.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-page/product-detail/product-detail.component';
import { DesignsComponent } from './admin-page/designs/designs.component';
import { OrdersComponent } from './admin-page/orders/orders.component';
import { OrderDetailComponent } from './admin-page/order-detail/order-detail.component';
import { DesignEditComponent } from './admin-page/design-edit/design-edit.component';
import { NewDesignComponent } from './admin-page/new-design/new-design.component';
import { ContactEditComponent } from './admin-page/contact-edit/contact-edit.component';
import { AboutEditComponent } from './admin-page/about-edit/about-edit.component';

const appRoutes: Routes= [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductPageComponent, children: [
        { path: ':id', component: ProductDetailComponent }
    ]},
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LogInFormComponent },
    { path: 'admin', component: AdminPageComponent, children: [
        { path: 'designs', component: DesignsComponent, children: [
            { path: ':id', component: DesignEditComponent }
        ]},
        { path: 'orders', component: OrdersComponent, children: [
            { path: ':id', component: OrderDetailComponent }
        ]},
        { path: 'contact-edit', component: ContactEditComponent },
        { path: 'about-edit', component: AboutEditComponent },
        { path: 'new-design', component: NewDesignComponent },
    ]},
    { path: 'order-form', component: OrderFormComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'custom-form', component: OrderFormComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
