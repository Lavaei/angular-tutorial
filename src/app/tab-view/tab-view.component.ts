import {Component, ContentChildren, OnInit} from '@angular/core';
import {TabService} from "../tab.service";
import {TabComponent} from "../tab/tab.component";

@Component({
	selector:    'app-tab-view',
	templateUrl: './tab-view.component.html',
	styleUrls:   ['./tab-view.component.scss'],
	providers:   [TabService]
})
export class TabViewComponent implements OnInit
{
	@ContentChildren(TabComponent) tabs: TabComponent[] = [];

	constructor(protected _tabService:TabService)
	{
	}

	ngOnInit(): void
	{
	}

	isActiveTab(tab: TabComponent): boolean
	{
		return this._tabService.isActiveTab(tab);
	}

	setActiveTab(tab: TabComponent)
	{
		this._tabService.setActiveTab(tab);
	}
}
