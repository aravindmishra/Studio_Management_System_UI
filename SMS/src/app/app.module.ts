import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/body/header/header.component';
import { SidebarComponent } from './components/body/sidebar/sidebar.component';
import { OrderFormComponent } from './components/orders/order-form/order-form.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { CustomerComponent } from './components/customers/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OrderFormComponent,
    OrderListComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
