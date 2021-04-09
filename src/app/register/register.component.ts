import {Component, OnInit} from '@angular/core';
import {IUser} from "../interfaces/IUser";

@Component({
	selector:    'app-register',
	templateUrl: './register.component.html',
	styleUrls:   ['./register.component.scss']
})
export class RegisterComponent implements OnInit
{

	user: IUser = {
		_id:       null,
		phone:     '0930',
		firstName: '',
		lastName:  '',
		password:  '',
		avatar:    '',
	};

	confirm: string;

	constructor()
	{
	}

	ngOnInit(): void
	{
	}

	//register(confirm:string)
	register()
	{
		if(this.confirm !== this.user.password)
		{
			console.log("Password and its confirm are not same");
			return;
		}

		//if(confirm !== this.user.password)
		//{
		//	console.log("Password and its confirm are not same");
		//	return;
		//}

		console.log(this.user);
	}
}
