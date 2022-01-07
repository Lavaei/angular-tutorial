import {Injectable} from '@angular/core';
import {TabComponent} from "./tab/tab.component";

@Injectable()
export class TabService
{

	protected _activeTab: TabComponent = null;

	constructor()
	{
	}

	isActiveTab(tab: TabComponent): boolean
	{
		if(!this._activeTab)
		{
			this.setActiveTab(tab);
		}

		return tab == this._activeTab;
	}

	setActiveTab(tab: TabComponent)
	{
		this._activeTab = tab;
	}
}
