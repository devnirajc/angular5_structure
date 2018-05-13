import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderCollectionComponent } from './order-collection.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { BulkOrderComponent } from './bulk-order/bulk-order.component';

const routes: Routes = [{
  path: '',
  component: OrderCollectionComponent,
  children: [
    { path: 'new-order', component: NewOrderComponent },
    { path: 'bulk-order', component: BulkOrderComponent }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderCollectionRoutingModule { }
