import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class OnlyGuestsGuard implements CanActivate {

	constructor(protected _appService:AppService)
	{
	}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this._appService.user;
  }

}
