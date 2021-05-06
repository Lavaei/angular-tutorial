import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
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
			phone:     new FormControl(''),
			firstName: new FormControl(''),
			lastName:  new FormControl(''),
			password:  new FormControl(''),
			confirm:   new FormControl(''),
		}
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
		console.log(this.formGroup.value);

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
