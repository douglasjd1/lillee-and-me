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

const appRoutes: Routes= [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductPageComponent, children: [
        { path: ':id', component: ProductDetailComponent }
    ]},
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LogInFormComponent},
    { path: 'admin', component: AdminPageComponent},
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
