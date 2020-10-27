import { Injectable } from '@angular/core';
import { Product } from '../../model/product/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService
{
  constructor() { }

  getAllProducts(): Observable<Product[]>
  {
    // Temporary hard-coded list. To be replaced by an HTTP call to an API to get all products from a database.
    var products: Product[] =
      [
        new Product(1, "Fertilizer for sandy soil", 243.17),
        new Product(2, "Fertilizer for boggy soil", 171.68),
        new Product(3, "Fertilizer for sea clay", 187.50),
        new Product(4, "Fertilizer for river clay", 122.97),
        new Product(5, "Cow food", 62.50),
        new Product(6, "Pig food", 38.75),
        new Product(7, "Chicken food", 42.30)
      ];

    return of(products);
  }
}
