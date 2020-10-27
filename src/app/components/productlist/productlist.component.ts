import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../services/products/products.service';
import { BasketService } from '../../services/basket/basket.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit
{
  displayedColumns: string[] = ['id', 'title', 'price', 'addtobasket'];
  products: Product[];
  dataSource = new MatTableDataSource();

  constructor(private productsService: ProductsService, private basketService: BasketService, private snackbar: MatSnackBar) { }

  ngOnInit(): void
  {
    this.productsService.getAllProducts().subscribe(products =>
    {
      this.products = products;
      this.dataSource.data = this.products;
    });
  }

  addTobasket(productId: number): void
  {
    var product: Product  = this.products.find(p => p.id === productId);
    if (product)
    {
      this.basketService.addProduct(product);
      this.openSnackbar(`"${product.title}" has been added to the basket.`, "Close", "ok");
    }
    else
      this.openSnackbar("Product not found.", "Close", "error");
  }

  openSnackbar(message: string, action: string, cssFormat: string)
  {
    this.snackbar.open(message, action, { duration: 2000, panelClass: [cssFormat] });
  }
}
