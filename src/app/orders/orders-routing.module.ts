import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';


const routes: Routes = [
  { path: '', component: PageOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
