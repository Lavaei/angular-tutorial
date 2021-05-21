import {Component, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ValidatorHelper} from "../classes/ValidatorHelper";
import {IUser} from "../interfaces/IUser";
import {UserService} from "../user.service";

@Component({
	selector:    'app-register',
	templateUrl: './register.component.html',
	styleUrls:   ['./register.component.scss']
})
export class RegisterComponent implements OnInit
{

	//user: IUser = {
	//	_id:       null,
	//	phone:     '0930',
	//	firstName: '',
	//	lastName:  '',
	//	password:  '',
	//	avatar:    '',
	//};

	//confirm: string;

	formGroup: FormGroup = new FormGroup(
		{
			phone:     new FormControl('', [
				Validators.required,
				Validators.pattern(/^09[0-9]{9}$/)
			], [
				this.isPhoneAvailable()
			]),
			firstName: new FormControl('', [Validators.required]),
			lastName:  new FormControl('', [Validators.required]),
			password:  new FormControl('', [Validators.required]),
			confirm:   new FormControl('', [Validators.required]),
		},
		[ValidatorHelper.password('password', 'confirm')],
	);

	constructor(protected _userService: UserService)
	{
	}

	ngOnInit(): void
	{
	}

	//register(confirm:string)
	register()
	{
		console.log(this.formGroup.errors);

		//if(this.confirm !== this.user.password)
		//{
		//	console.log("Password and its confirm are not same");
		//	return;
		//}
		//
		//if(confirm !== this.user.password)
		//{
		//	console.log("Password and its confirm are not same");
		//	return;
		//}
		//
		//console.log(this.user);
	}

	shouldShowPhoneRequiredError(): boolean
	{
		return this.formGroup.get('phone').getError('required') && this.formGroup.get('phone').touched;
	}

	shouldShowPhonePatternError(): boolean
	{
		return this.formGroup.get('phone').getError('pattern') && this.formGroup.get('phone').touched;
	}

	shouldShowPhoneNotAvailableError(): boolean
	{
		return this.formGroup.get('phone').getError('isPhoneAvailable') && this.formGroup.get('phone').touched;
	}

	shouldShowFirstNameRequiredError(): boolean
	{
		return this.formGroup.get('firstName').getError('required') && this.formGroup.get('firstName').touched;
	}

	shouldShowLastNameRequiredError(): boolean
	{
		return this.formGroup.get('lastName').getError('required') && this.formGroup.get('lastName').touched;
	}

	shouldShowPasswordRequiredError(): boolean
	{
		return this.formGroup.get('password').getError('required') && this.formGroup.get('password').touched;
	}

	shouldShowConfirmRequiredError(): boolean
	{
		return this.formGroup.get('confirm').getError('required') && this.formGroup.get('confirm').touched;
	}

	shouldShowConfirmNotMatchError(): boolean
	{
		return this.formGroup.getError('password') &&
			this.formGroup.get('password').touched &&
			this.formGroup.get('confirm').touched;
	}


	isPhoneAvailable(): AsyncValidatorFn
	{
		return (control: AbstractControl) => {
			return this._userService.isPhoneAvailable(control.value).pipe(
				map(result => result ? {isPhoneAvailable: control.value} : null)
			);
		};
	}
}
