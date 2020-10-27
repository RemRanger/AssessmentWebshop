import { Product } from '../product/product.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(999, "Test Product", 42.88)).toBeTruthy();
  });
});
