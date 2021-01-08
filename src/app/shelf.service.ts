import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "./interfaces/IProduct";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class ShelfService
{

  constructor(protected _requestService: RequestService)
  {
  }

  getProducts(): Observable<IProduct[]>
  {
    return this._requestService.get<IProduct[]>('assets/resources/products.json');
  }
}
