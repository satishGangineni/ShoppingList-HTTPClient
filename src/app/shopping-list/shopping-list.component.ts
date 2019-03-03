import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})


export class ShoppingListComponent {
  title = 'MyShoppingList';

  errortext = "";
  shoppingItem: string = "";
  buttonLabel: string = "Add";
  products: string[];

  constructor(private _shoppinglistservice: ShoppingListService) {
    this.products = _shoppinglistservice.getProducts();
  }

  addItem() {

    this.errortext = "";
    if (this.shoppingItem === "") { return; }
    if (!this._shoppinglistservice.ItemInTheList(this.shoppingItem)) {
      this._shoppinglistservice.addItem(this.shoppingItem);
    } else {
      this.errortext = "The item is already in your shopping list.";
    }
  }

  // editItem(x: number) {
  //   this.shoppingItem = this.products[x];
  //   this.buttonLabel = "Update"

  // }

  // updateItem() {

  // }

  removeItem(x: number) {
    this.errortext = "";
    this._shoppinglistservice.removeItem(x);
  }

}
