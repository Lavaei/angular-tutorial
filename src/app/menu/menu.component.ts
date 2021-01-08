import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from "../interfaces/IMenuItem";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() items: IMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
