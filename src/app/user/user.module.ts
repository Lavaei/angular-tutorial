import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CartComponent} from "../cart/cart.component";
import {LoginComponent} from "../login/login.component";
import {ProfileComponent} from "../profile/profile.component";
import {RegisterComponent} from "../register/register.component";
import {UserRoutingModule} from "./user-routing.module";



@NgModule({
  imports: [
	  CommonModule,
	  UserRoutingModule,
	  FormsModule,
	  ReactiveFormsModule,
	  InputTextModule,
	  ButtonModule,
  ],
	declarations: [
		LoginComponent,
		RegisterComponent,
		ProfileComponent,
		CartComponent,
	],
})
export class UserModule { }
