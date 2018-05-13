import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCollectionComponent } from './order-collection.component';
import { OrderCollectionRoutingModule } from './order-collection-routing.module';
import { BulkOrderComponent } from './bulk-order/bulk-order.component';
import { NewOrderComponent } from './new-order/new-order.component';

@NgModule({
  imports: [
    CommonModule,
    OrderCollectionRoutingModule
  ],
  declarations: [OrderCollectionComponent, NewOrderComponent, BulkOrderComponent]
})
export class OrderCollectionModule { }
