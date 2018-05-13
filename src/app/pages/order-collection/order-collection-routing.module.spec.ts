import { OrderCollectionRoutingModule } from './order-collection-routing.module';

describe('OrderCollectionRoutingModule', () => {
  let orderCollectionRoutingModule: OrderCollectionRoutingModule;

  beforeEach(() => {
    orderCollectionRoutingModule = new OrderCollectionRoutingModule();
  });

  it('should create an instance', () => {
    expect(orderCollectionRoutingModule).toBeTruthy();
  });
});
