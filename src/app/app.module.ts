import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasketComponent } from './basket/basket.component';

@NgModule
  ({
    declarations:
      [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        BasketComponent
      ],
    imports:
      [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
