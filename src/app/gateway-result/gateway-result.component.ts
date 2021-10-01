import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-gateway-result',
  templateUrl: './gateway-result.component.html',
  styleUrls: ['./gateway-result.component.scss']
})
export class GatewayResultComponent implements OnInit {

	protected _status: string;

  constructor(protected _route: ActivatedRoute,
              protected _cartService: CartService) { }

  ngOnInit(): void {
		this._route.params.subscribe(({status}) => this._status = status);

		this.updateCart();
  }

	isPaymentFailed(): boolean
	{
		return this._status === 'failed';
	}

	updateCart()
	{
		this._cartService.getFreshCart().subscribe();
	}
}
