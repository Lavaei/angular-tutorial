import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "./interfaces/IProduct";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(protected _requestService: RequestService)
  {
  }

  getProduct(productID: string): Observable<IProduct>
  {
    return this._requestService.get<IProduct>(`products/${productID}`);
  }

  update(productID:string, product: Partial<IProduct>)
  {
  	return this._requestService.patch<IProduct>(`assets/resources/product.${productID}.json`, product)
  }
}
