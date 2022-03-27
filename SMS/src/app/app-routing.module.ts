import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { OrderFormComponent } from './components/orders/order-form/order-form.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';

const routes: Routes = [{
  path:'customer/form',
  component:CustomerComponent
},{
  path:'order/form',
  component:OrderFormComponent
},{
  path:'order/list',
  component:OrderListComponent
},{
  path:'**',
  redirectTo:'customer/form'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
