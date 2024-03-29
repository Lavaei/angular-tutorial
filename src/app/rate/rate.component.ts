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
	onTouched = () => {};
	isDisabled:boolean = false;

  constructor() { }

  ngOnInit(): void {
		for(let option of this.options)
		{
			this.value[option.key] = 3;
		}
  }

	onValueChanged()
	{
		this.onChange(this.value);
		this.onTouched();
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
		this.isDisabled = isDisabled;
	}

	registerOnTouched(onTouched: () => {}): void
	{
		this.onTouched = onTouched;
	}
}
