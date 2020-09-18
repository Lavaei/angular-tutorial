import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";
import {IProduct} from "./interfaces/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ShelfService
{

  constructor(protected _http: HttpClient)
  {
  }

  getProducts(): Observable<IProduct[]>
  {
    return this._http.get<{ status: 'success' | 'error', result: IProduct[] }>('assets/resources/products.json')
      .pipe(
        filter(response => response.status === 'success'),
        map(response => response.result)
      );
  }
}
