import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {IMenuItem} from "../interfaces/IMenuItem";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get menuItems(): IMenuItem[]
  {
    return this._appService.menuItems;
  }

  constructor(protected _appService:AppService) { }

  ngOnInit(): void {
  }

}
