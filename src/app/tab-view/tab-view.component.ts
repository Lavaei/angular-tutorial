import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit {

	@Input('tabs') tabs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
