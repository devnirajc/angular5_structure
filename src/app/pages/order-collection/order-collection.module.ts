import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { OrderCollectionComponent } from './order-collection.component';
import { OrderCollectionRoutingModule } from './order-collection-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FileDropModule } from 'ngx-file-drop';
import { OrderHomeComponent } from './components/order-home/order-home.component';

@NgModule({
  imports: [
    CommonModule,
    OrderCollectionRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [OrderCollectionComponent, NewOrderComponent, BulkOrderComponent, OrderHomeComponent]
})
export class OrderCollectionModule { }
