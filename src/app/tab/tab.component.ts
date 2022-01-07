import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

	@ViewChild('templateRef') templateRef:TemplateRef<any>;
	@Input('title') title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
