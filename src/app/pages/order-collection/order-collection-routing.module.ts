import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { OrderCollectionComponent } from './order-collection.component';
import {OrderHomeComponent } from './components/order-home/order-home.component';
const routes: Routes = [{
  path: 'order-collection',
  component: OrderCollectionComponent,
  children: [
    { path: '', component: OrderHomeComponent },
    { path: 'new-order', component: NewOrderComponent },
    { path: 'bulk-order', component: BulkOrderComponent }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderCollectionRoutingModule { }
