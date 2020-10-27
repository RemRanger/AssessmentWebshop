import { Product } from './product/product.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });
});
