import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from "./app.service";

@Injectable({
	providedIn: 'root'
})
export class OnlyGuestsGuard implements CanActivate
{

	constructor(protected _appService: AppService,
	            protected _router: Router)
	{
	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
	{
		const PROFILE_URL: UrlTree = this._router.createUrlTree(['user', 'profile']);

		if(this._appService.user)
		{
			return PROFILE_URL;
		}

		return true;
	}

}
