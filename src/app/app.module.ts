import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { BasketitemlistComponent } from './components/basketitemlist/basketitemlist.component';

@NgModule
  ({
    declarations:
      [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        BasketComponent,
        ProductlistComponent,
        BasketitemlistComponent
      ],
    imports:
      [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatSnackBarModule
      ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
