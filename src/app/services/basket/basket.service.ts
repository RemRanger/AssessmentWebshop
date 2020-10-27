import { Injectable } from '@angular/core';
import { Product } from '../../model/product/product.model';
import { BasketItem } from '../../model/basketitem/basketitem.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService
{
  items: BasketItem[] = new Array();

  constructor() { }

  addProduct(product: Product): void
  {
    var item: BasketItem = this.items.find(i => i.productId == product.id);
    if (item)
      item.quantity++;
    else
      this.items.push(new BasketItem(product.id, product.title));
  }

  addProductById(productId: number): void
  {
    var item: BasketItem = this.items.find(i => i.productId == productId);
    if (item)
      item.quantity++;
  }

  removeProduct(productId: number, removeAll: boolean): void
  {
    var item: BasketItem = this.items.find(i => i.productId == productId);
    if (item)
    {
      if (item.quantity > 1 && !removeAll)
        item.quantity--;
      else
      {
        const index = this.items.indexOf(item, 0);
        if (index >= 0)
          this.items.splice(index, 1);
      }
    }
  }

  getAllItems(): Observable<BasketItem[]>
  {
     //Temporarily simply return local list. To be replaced by an HTTP call to an API to get all items from a database.
    return of(this.items)
  }

  getItemCount(): number
  {
    return this.items.length > 0 ? this.items.reduce((sum, i) => sum + i.quantity, 0) : 0;
  }
}
