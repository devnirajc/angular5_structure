import { OrderCollectionModule } from './order-collection.module';

describe('OrderCollectionModule', () => {
  let orderCollectionModule: OrderCollectionModule;

  beforeEach(() => {
    orderCollectionModule = new OrderCollectionModule();
  });

  it('should create an instance', () => {
    expect(orderCollectionModule).toBeTruthy();
  });
});
