import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {IUser} from "../interfaces/IUser";

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.scss']
})
export class UserWidgetComponent implements OnInit {

  get user(): IUser
  {
    return this._appService.user;
  }

  constructor(protected _appService: AppService) { }

  ngOnInit(): void {
  }

  getFullName() : string
  {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
}
