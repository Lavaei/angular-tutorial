import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class AngularBankService {

  constructor(protected _requestService:RequestService) { }

	getGatewayUrl(): Observable<string>
	{
		return this._requestService.get<string>("bank/angular");
	}
}
