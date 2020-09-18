import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "./interfaces/IProduct";
import {IResponse} from "./interfaces/IResponse";
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
    return this._requestService.get<IResponse<IProduct[]>>('assets/resources/products.json');
  }
}
