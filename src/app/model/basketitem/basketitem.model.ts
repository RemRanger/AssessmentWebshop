export class BasketItem
{
  productId: number;
  productTitle: string;
  quantity: number;

  constructor(productId: number, productTitle: string)
  {
    this.productId = productId;
    this.productTitle = productTitle;
    this.quantity = 1;
  }
}
