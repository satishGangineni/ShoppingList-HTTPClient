import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  products : any [];
  updatedMessage : string = null;
  addProduct = false;
  constructor( private _productService: ProductService) { }

  AddProduct(){
    this.addProduct = !this.addProduct;
  }

  ngOnInit() {
    //this.products = 
    this._productService.getProducts()
    .subscribe((result)=>{
        if(result){
        this.products = result;
      }

    },(error)=>{console.log(error)});
  }

  OnProductUpdated(result){
    //console.log(result);
    this.updatedMessage = result
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  editProductId:number = null;
  editProduct(productid:number){
    this.updatedMessage = null
    this.editProductId = productid;
  }
}
