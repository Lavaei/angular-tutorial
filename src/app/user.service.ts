import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected _requestService:RequestService) { }

	isPhoneAvailable(phone:string): Observable<boolean>
	{
		return this._requestService.get("users/isPhoneAvailable", {params: {phone}})
	}
}
