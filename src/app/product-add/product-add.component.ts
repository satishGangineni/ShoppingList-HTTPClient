import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product-list/products.service'
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit, OnChanges {


  @Input()
  productId : number=null;
  @Output() ProductUpdated : EventEmitter<string> =  new EventEmitter<string>();

  product : any=null;

  ngOnChanges(changes: SimpleChanges): void {
  }

  constructor( private _productService: ProductService ) { }

  pageTitle = "Add Product:";

  SaveProduct(){

    this._productService.SaveProduct(this.product).subscribe((result)=>{
      alert(JSON.stringify(result));
      
    })

    
  }

  ngOnInit() {
    this.product = {};
  }

}
