import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {IInitialData} from "./interfaces/IInitialData";
import {IMenuItem} from "./interfaces/IMenuItem";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  menuItems: IMenuItem[] = [];

  constructor(protected _requestService: RequestService) { }

  getInitialData(): Observable<IInitialData>
  {
    return this._requestService.get<IInitialData>("assets/resources/initialData.json").pipe(
      tap(response => this.menuItems = response.menuItems)
    );
  }
}
