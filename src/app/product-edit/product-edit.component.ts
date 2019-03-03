import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product-list/products.service'
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnChanges {


  @Input()
  productId : number=null;
  @Output() ProductUpdated : EventEmitter<string> =  new EventEmitter<string>();

  product : any=null;

  ngOnChanges(changes: SimpleChanges): void {
    this.productId = changes.productId.currentValue; 
     this._productService.getProduct(this.productId).
    subscribe((result)=>{
      this.product = result;
    });
  }

  constructor( private _productService: ProductService ) { }

  pageTitle = "Product Edit - Id:";

  UpdateProduct(){

    this._productService.updateProduct(this.product)
    .subscribe((result)=>{
      this.ProductUpdated.emit(`product with id ${this.product.productId} successfully updated`);
    });
    
  }

//   product = { "productId": 4,
//   "productName": "Saw",
//   "productCode": "TBX-0022",
//   "releaseDate": "May 15, 2016",
//   "description": "15-inch steel blade hand saw",
//   "price": 11.55,
//   "starRating": 3.7,
//   "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
// };

  ngOnInit() {
  }

}
