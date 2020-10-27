import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BasketComponent } from './components/basket/basket.component';


const routes: Routes =
  [
    { path: 'home', component: HomeComponent },
    { path: 'basket', component: BasketComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
