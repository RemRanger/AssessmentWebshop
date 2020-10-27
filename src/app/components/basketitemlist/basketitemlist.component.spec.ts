import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BasketitemlistComponent } from './basketitemlist.component';
import { Product } from '../../model/product/product.model';

describe('BasketitemlistComponent', () => {
  let component: BasketitemlistComponent;
  let fixture: ComponentFixture<BasketitemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasketitemlistComponent],
      imports: [MatSnackBarModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an item to the basket', async(() =>
  {
    const fixture = TestBed.createComponent(BasketitemlistComponent);
    expect(component.dataSource.data.length).toEqual(0);
    component.addToBasket(new Product(999, "Test product", 42.88));
    fixture.detectChanges();
    expect(component.dataSource.data.length).toEqual(1);
  }));
});
