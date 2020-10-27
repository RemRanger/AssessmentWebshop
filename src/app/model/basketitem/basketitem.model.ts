import { Product } from '../product/product.model';

export class BasketItem
{
  product: Product;
  quantity: number;

  constructor(product: Product)
  {
    this.product = product;
    this.quantity = 1;
  }
}
