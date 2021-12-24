import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
	encapsulation: ViewEncapsulation.ShadowDom
})
export class TabViewComponent implements OnInit {

	@Input('tabs') tabs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
