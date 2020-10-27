import { BasketItem } from './basketitem.model';
import { Product } from '../product/product.model';

describe('BasketItem', () =>
{
  it('should create an instance', () =>
  {
    expect(new BasketItem(new Product(999, "Test Product", 42.88))).toBeTruthy();
  });
});
