import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Inject, Injectable} from '@angular/core';
import {MessageService} from "primeng/api";
import {Observable, pipe, throwError, UnaryFunction} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {environment} from "../environments/environment";
import {IProduct} from "./interfaces/IProduct";
import {IResponse} from "./interfaces/IResponse";
import {API_URL} from "./tokens";

@Injectable({
	providedIn: 'root'
})
export class RequestService
{

	constructor(protected _http: HttpClient,
	            protected _messageService: MessageService,
	            @Inject(API_URL) protected _apiUrl: string)
	{
	}

	get<T>(url: string, options?: {
		headers?: HttpHeaders | {
			[header: string]: string | string[];
		};
		observe?: 'body';
		params?: HttpParams | {
			[param: string]: string | string[];
		};
		reportProgress?: boolean;
		responseType?: 'json';
		withCredentials?: boolean;
	}): Observable<T>
	{
		return this._http.get<IResponse<T>>(`${this._apiUrl}/${url}`, options).pipe(
			this.postRequest(),
		);
	}

	patch<T>(url: string, body: any | null): Observable<T>
	{
		return this._http.patch<IResponse<T>>(url, body).pipe(
			this.postRequest(),
		);
	}

	post<T>(url: string, body: any | null): Observable<T>
	{
		return this._http.post<IResponse<T>>(url, body).pipe(
			this.postRequest(),
		);
	}

	delete<T>(url: string, options?: {
		headers?: HttpHeaders | {
			[header: string]: string | string[];
		};
		observe?: 'body';
		params?: HttpParams | {
			[param: string]: string | string[];
		};
		reportProgress?: boolean;
		responseType?: 'json';
		withCredentials?: boolean
	}): Observable<T>
	{
		return this._http.delete<IResponse<T>>(url, options).pipe(
			this.postRequest(),
		);
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
