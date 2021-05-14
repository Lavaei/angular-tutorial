import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatorHelper} from "../classes/ValidatorHelper";
import {IUser} from "../interfaces/IUser";

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
			phone:     new FormControl('', [Validators.required, Validators.pattern(/^09[0-9]{9}$/)]),
			firstName: new FormControl('', [Validators.required]),
			lastName:  new FormControl('', [Validators.required]),
			password:  new FormControl('', [Validators.required]),
			confirm:   new FormControl('', [Validators.required]),
		},
		[ValidatorHelper.password('password', 'confirm')]
	);

	constructor()
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
}
