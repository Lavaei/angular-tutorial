import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BankService} from "./bank.service";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class AngularBankService extends BankService{

  constructor(protected _requestService:RequestService) { super(); }

	getGatewayUrl(): Observable<string>
	{
		return this._requestService.get<string>("bank/angular");
	}
}
