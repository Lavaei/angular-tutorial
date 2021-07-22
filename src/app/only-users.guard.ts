import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from "./app.service";

@Injectable({
	providedIn: 'root'
})
export class OnlyUsersGuard implements CanActivate
{
	constructor(protected _appService: AppService,
	            protected _router: Router)
	{
	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
	{
		const LOGIN_URL: UrlTree = this._router.createUrlTree(['user', 'login']);

		if (!this._appService.user)
		{
			return LOGIN_URL;
		}

		return true;
	}

}
