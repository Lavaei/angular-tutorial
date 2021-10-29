import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: RateComponent
		}
	]
})
export class RateComponent implements OnInit, ControlValueAccessor {

	@Input('options') options: {key: string, title: string}[];

	value: {[key:string] : number} = {};

	onChange = (value: {[key:string] : number}) => {};

  constructor() { }

  ngOnInit(): void {
		for(let option of this.options)
		{
			this.value[option.key] = 3;
		}
  }


	writeValue(value: {[key:string] : number}): void
	{
		this.value = value;
	}

	registerOnChange(onChange: (value: {[key:string] : number}) => {}): void
	{
		this.onChange = onChange;
	}

	setDisabledState(isDisabled: boolean): void
	{

	}

	registerOnTouched(fn: any): void
	{
	}


}
