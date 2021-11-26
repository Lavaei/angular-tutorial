import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: 'a'
})
export class OpenExternalLinksInNewTabDirective {

  constructor(protected _elementRef: ElementRef) {

  }

	ngAfterViewInit()
	{
		this._setBlankAttribute();
	}

	protected _setBlankAttribute()
	{
		const ELEMENT: HTMLAnchorElement = this._elementRef.nativeElement;

		ELEMENT.setAttribute('target', '_blank');
	}
}
