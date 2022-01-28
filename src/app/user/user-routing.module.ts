import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from "../cart/cart.component";
import {LoginComponent} from "../login/login.component";
import {OnlyGuestsGuard} from "../only-guests.guard";
import {OnlyUsersGuard} from "../only-users.guard";
import {ProfileComponent} from "../profile/profile.component";
import {RegisterComponent} from "../register/register.component";

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: "login",
				component: LoginComponent,
				pathMatch: "full",
				canActivate: [OnlyGuestsGuard]
			},
			{
				path: "register",
				component: RegisterComponent,
				pathMatch: "full",
				canActivate: [OnlyGuestsGuard]
			},
			{
				path: "profile",
				component: ProfileComponent,
				pathMatch: "full",
				canActivate: [OnlyUsersGuard]
			},
			{
				path: "cart",
				component: CartComponent,
				pathMatch: "full",
				canActivate: [OnlyUsersGuard]
			},
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule
{ }
