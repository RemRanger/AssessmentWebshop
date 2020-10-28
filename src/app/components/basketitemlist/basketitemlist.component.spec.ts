import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BasketitemlistComponent } from './basketitemlist.component';
import { Product } from '../../model/product/product.model';

describe('BasketitemlistComponent', () =>
{
  let component: BasketitemlistComponent;
  let fixture: ComponentFixture<BasketitemlistComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [BasketitemlistComponent],
      imports: [MatSnackBarModule],
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(BasketitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should contain a <p> element if no items have been added', () =>
  {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el).toBeTruthy();
  });

  it('should show basket empty message if no items have been added', () =>
  {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toEqual('Your basket is empty.');
  });

  it('should contain no <table> element if no items have been added', () =>
  {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('table');
    expect(el).toBeFalsy();
  });

  it('should contain 0 items if no item has been added ', async(() =>
  {
    expect(component.dataSource.data.length).toEqual(0);
  }));

  it('should contain 1 item if an item has been added', async(() =>
  {
    component.addToBasket(new Product(999, "Test product", 42.88));
    fixture.detectChanges();
    expect(component.dataSource.data.length).toEqual(1);
  }));

  it('should contain no <p> element if an item has been added', () =>
  {
    component.addToBasket(new Product(999, "Test product", 42.88));
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el).toBeFalsy();
  });

  it('should contain a <table> element if an item has been added', () =>
  {
    component.addToBasket(new Product(999, "Test product", 42.88));
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('table');
    expect(el).toBeTruthy();
  });
});
