import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderComponent } from './bulk-order.component';

describe('BulkOrderComponent', () => {
  let component: BulkOrderComponent;
  let fixture: ComponentFixture<BulkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'app'`, async(() => {
    const fixture1 = TestBed.createComponent(BulkOrderComponent);
    const app = fixture1.debugElement.componentInstance;
    expect(app.title).toEqual('bulk-order');
  }));
});
