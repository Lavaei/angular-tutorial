import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {throwError} from "rxjs";
import {catchError, filter, map, tap} from "rxjs/operators";
import {IProduct} from "./interfaces/IProduct";
import {IResponse} from "./interfaces/IResponse";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(protected _http:HttpClient) { }

  get<T>(url: string)
  {
    return this._http.get<IResponse<IProduct[]>>(url).pipe(
      tap(response => {
        if(response.status !== 'success')
        {
          throw {
            name: 'Status is not equals to success',
            message: response.errorMessage
          };

        }
      }),
      map(response => response.result),
      catchError(error => {

        console.log("Toast error!");

        return throwError(error);
      })
    );
  }
}
