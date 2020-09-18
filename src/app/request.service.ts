import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";
import {throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {IProduct} from "./interfaces/IProduct";
import {IResponse} from "./interfaces/IResponse";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(protected _http:HttpClient,
              protected _messageService: MessageService) { }

  get<T>(url: string)
  {
    return this._http.get<IResponse<IProduct[]>>(url).pipe(
      tap(response => {
        if(response.status !== 'success')
        {
          throw new Error(response.errorMessage);
        }
      }),
      map(response => response.result),
      catchError(error => {

        this._messageService.add(
          {
            severity: "error",
            summary: error.message
          }
        );

        return throwError(error);
      })
    );
  }
}
