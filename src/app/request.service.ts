import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";
import {Observable, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {IProduct} from "./interfaces/IProduct";
import {IResponse} from "./interfaces/IResponse";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(protected _http:HttpClient,
              protected _messageService: MessageService) { }

  get<T>(url: string): Observable<T>
  {
    return this._http.get<IResponse<T>>(url).pipe(
      tap(response => {
        if(response.status !== 'success')
        {
          throw new Error(response.errorMessage);
        }
      }),
      map(response => response.result),
      catchError(error => {

        if(error instanceof HttpErrorResponse)
        {
          switch (error.status)
          {
            case 404:
              this._messageService.add(
                {
                  severity: "error",
                  summary: "Not Found"
                }
              );
              break;
          }
        }
        else
        {
          this._messageService.add(
            {
              severity: "error",
              summary: error.message
            }
          );
        }

        return throwError(error);
      })
    );
  }
}
