import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {OnlyGuestsGuard} from "./only-guests.guard";
import {OnlyUsersGuard} from "./only-users.guard";
import {PdpComponent} from "./pdp/pdp.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {ShelfComponent} from "./shelf/shelf.component";

const routes: Routes = [
  {
    path: "",
    component: ShelfComponent,
    pathMatch: "full"
  },
	{
		path: "user/login",
		component: LoginComponent,
		pathMatch: "full",
		canActivate: [OnlyGuestsGuard]
	},
	{
		path: "user/register",
		component: RegisterComponent,
		pathMatch: "full",
		canActivate: [OnlyGuestsGuard]
	},
	{
		path: "user/profile",
		component: ProfileComponent,
		pathMatch: "full",
		canActivate: [OnlyUsersGuard]
	},
	{
		path: "user/cart",
		component: CartComponent,
		pathMatch: "full",
		canActivate: [OnlyUsersGuard]
	},
  {
    path: "pdp/:id",
    component: PdpComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotfoundComponent
  },
  //{
  //  path: "**",
  //  redirectTo: ""
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
