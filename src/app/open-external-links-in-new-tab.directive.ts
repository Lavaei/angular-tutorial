import {Directive, ElementRef} from '@angular/core';
import {environment} from "../environments/environment";

@Directive({
	selector: 'a'
})
export class OpenExternalLinksInNewTabDirective
{

	constructor(protected _elementRef: ElementRef)
	{

	}

	ngAfterViewInit()
	{

		if (this._isExternalLink())
		{
			this._setBlankAttribute();
		}
	}

	protected _setBlankAttribute()
	{
		const ELEMENT: HTMLAnchorElement = this._elementRef.nativeElement;

		ELEMENT.setAttribute('target', '_blank');
	}

	protected _getHrefAttribute(): string
	{
		const ELEMENT: HTMLAnchorElement = this._elementRef.nativeElement;

		return ELEMENT.getAttribute('href');
	}

	protected _isExternalLink(): boolean
	{
		const URL: string = this._getHrefAttribute();
		const PATTERN_ABSOLUTE: RegExp = /^https?:\/\//;

		return PATTERN_ABSOLUTE.test(URL) && !URL.startsWith(environment.client.url);
	}
}
