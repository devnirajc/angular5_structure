import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderDetails, OrderItem } from './orderDetails';
import { itemList } from './itemList';
import { HttpClient } from '@angular/common/http';

class ItemRow {
  constructor(
    public itemNumber: number = null,
    public description: string = '',
    public quantity: number = null,
    public weight: string = '',
    public upc: string = '',
  ) {}
}

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {}
}
