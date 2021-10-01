import {Observable} from "rxjs";

export abstract class BankService
{
	abstract getGatewayUrl(): Observable<string>
}
