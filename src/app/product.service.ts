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

  createRate(productID:string, rate: number): Observable<number>
  {
  	return this._requestService.post<number>(`products/${productID}/rates`, {rate})
  }
}
