import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "./interfaces/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  constructor(protected _http: HttpClient) { }

  getProducts(): Observable<IProduct[]>
  {
    return this._http.get<IProduct[]>('assets/resources/products.json');
  }
}
