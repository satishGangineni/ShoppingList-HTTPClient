import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  products: string[] = ["Milk", "Bread", "Cheese"];
  constructor() { }

  getProducts(): string[] {
    return this.products;
  }

  addItem(item: string) {
    this.products.push(item);
  }

  removeItem(x: number) {
    this.products.splice(x, 1);
  }

  ItemInTheList(item) {
    return (this.products.indexOf(item) !== -1);
  }

}
