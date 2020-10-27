import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../../services/basket/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
  constructor(private router: Router, private basketService: BasketService) { }

  ngOnInit(): void
  {
  }

  getUserName(): string
  {
    // Temporary hard-coded value: To be replaced by the name of the logged in user.
    return "John Smith";
  }

  navigateHome(): void
  {
    this.router.navigateByUrl("/home");
  }

  navigateBasket(): void
  {
    this.router.navigateByUrl("/basket");
  }

  getBasketCount(): number
  {
    return this.basketService.getItemCount();
  }
}

