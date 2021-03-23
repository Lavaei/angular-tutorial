import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";
import {Observable, pipe, throwError, UnaryFunction} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {IProduct} from "./interfaces/IProduct";
import {IResponse} from "./interfaces/IResponse";

@Injectable({
	providedIn: 'root'
})
export class RequestService
{

	constructor(protected _http: HttpClient,
	            protected _messageService: MessageService)
	{
	}

	get<T>(url: string): Observable<T>
	{
		return this._http.get<IResponse<T>>(url).pipe(
			this.postRequest(),
		);
	}

	patch<T>(url: string, body: any | null): Observable<T>
	{
		//return this._http.patch<IResponse<T>>(url, body).pipe(
		//	this.postRequest(),
		//);

		/**
		 * TODO This line is not a correct way to send PATCH request!!
		 */
		return this.get(url);
	}

	postRequest<T>(): UnaryFunction<Observable<IResponse<T>>, Observable<T>>
	{
		return pipe(
			tap(response => {
				if (response.status !== 'success')
				{
					throw new Error(response.errorMessage);
				}
			}),
			map(response => response.result),
			catchError(error => {

				if (error instanceof HttpErrorResponse)
				{
					switch (error.status)
					{
						case 404:
							this._messageService.add(
								{
									severity: "error",
									summary:  "Not Found"
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
							summary:  error.message
						}
					);
				}

				return throwError(error);
			})
		);
	}
}
