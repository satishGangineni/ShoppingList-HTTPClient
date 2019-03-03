
import { Injectable } from '@angular/core';
//import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import  { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/Http'
import  { Observable, } from 'rxjs'
import { IProduct } from '../IProduct'
import { catchError } from 'rxjs/operators'
//import { catch } from 'rxjs/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient : HttpClient ) { }
  products : any[];
  baseURL : string = "http://localhost:3000/api/products/";
  getProducts(): Observable<IProduct[]> {
    //return this.products;
    return this._httpClient.get<IProduct[]>(this.baseURL);
    //.pipe( catchError(this.catchErrors) )
    
  };

  catchErrors(error ){
    console.log(error);
   // return new ErrorObservable("")
  }

  getProduct(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(this.baseURL + id)
  }

  // getProductFromList(id:number){
  //   var product = this.products.find((product)=> product.productId===id);
  //   return { 
  //     "productId": product.productId,
  //     "productName": product.productName,
  //     "productCode": product.productCode,
  //     "releaseDate": product.releaseDate,
  //     "description": product.description,
  //     "price": product.price,
  //     "starRating": product.starRating,
  //     "imageUrl": product.imageUrl
  //   }

  // }


  SaveProduct( product:any): Observable<any> {
    return this._httpClient.post(this.baseURL,
      product,{
        headers: new HttpHeaders({ 'Content-Type':'application/json'})
      }
      );
  }

    //var foundproduct = this.products.find((product)=> product.productId=== product.productId);
  updateProduct( product:any): Observable<any> {
    return this._httpClient.put(this.baseURL + product.productId,
      product,{
        headers: new HttpHeaders({ 'Content-Type':'application/json'})
      }
      );
  }

/*products : any[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 3,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 4,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    }
];*/
    
  
}


