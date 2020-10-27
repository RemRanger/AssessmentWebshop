import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket/basket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasketItem } from '../../model/basketitem/basketitem.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-basketitemlist',
  templateUrl: './basketitemlist.component.html',
  styleUrls: ['./basketitemlist.component.css']
})
export class BasketitemlistComponent implements OnInit
{
  displayedColumns: string[] = ['productTitle', 'quantity', 'editquantity'];
  items: BasketItem[];
  dataSource = new MatTableDataSource();

  constructor(private basketService: BasketService, private snackbar: MatSnackBar) { }

  ngOnInit(): void
  {
    this.getItems();
  }

  getItems(): void
  {
    this.basketService.getAllItems().subscribe(items =>
    {
      this.items = items;
      this.dataSource.data = this.items;
    });
  }

  increaseQuantity(productId: number): void
  {
    var item: BasketItem = this.items.find(i => i.productId === productId);
    if (item)
      this.basketService.addProductById(productId);
    else
      this.openSnackbar("Product not found.", "Close", "error");
}

  decreaseQuantity(productId: number): void
  {
    var item: BasketItem = this.items.find(i => i.productId === productId);
    if (item)
    {
      if (item.quantity > 1)
        this.basketService.removeProduct(productId, false);
    }
    else
      this.openSnackbar("Product not found.", "Close", "error");
  }

  removeFrombasket(productId: number): void
  {
    var item: BasketItem = this.items.find(i => i.productId === productId);
    if (item)
    {
      this.basketService.removeProduct(productId, true);
      this.getItems();
      this.openSnackbar(`"${item.productTitle}" has been removed from the basket.`, "Close", "ok");
    }
    else
      this.openSnackbar("Product not found.", "Close", "error");
  }

  openSnackbar(message: string, action: string, cssFormat: string)
  {
    this.snackbar.open(message, action, { duration: 2000, panelClass: [cssFormat] });
  }}
