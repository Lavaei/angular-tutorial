import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit, ControlValueAccessor {

	@Input('options') options: {key: string, title: string}[];

	value: {[key:string] : number} = {};

  constructor() { }

  ngOnInit(): void {
		for(let option of this.options)
		{
			this.value[option.key] = 3;
		}
  }

	registerOnChange(fn: any): void
	{
	}

	registerOnTouched(fn: any): void
	{
	}

	writeValue(obj: any): void
	{
	}

}
