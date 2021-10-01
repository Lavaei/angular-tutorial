import { Component, OnInit } from '@angular/core';
import {AngularBankService} from "../angular-bank.service";
import {CartService} from "../cart.service";
import {ICartItem} from "../interfaces/ICartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	public items: ICartItem[] = [];
	public shippingPrice: number = 0;

  constructor(protected _cartService: CartService,
              protected _angularBankService:AngularBankService) { }

  ngOnInit(): void {
  	this.items = this._cartService.getAll();

  	this.getShippingPrice();
  }

  getShippingPrice()
  {
  	return this._cartService.getShippingPrice().subscribe(
  		shippingPrice => this.shippingPrice = shippingPrice
	  );
  }

	getTotal(): number
	{
		let total:number = this.shippingPrice;

		for (let item of this.items)
		{
			total += item.product.salePrice * item.count;
		}

		return total;
	}

	setItemQuantity(productID:string, count: number)
	{
		this._cartService.updateItem(productID, {count});
	}

	removeItem(productID: string)
	{
		this._cartService.removeItem(productID);

		this.items = this._cartService.getAll();
	}

	redirectToGateway()
	{
		this._angularBankService.getGatewayUrl().subscribe(
			url => (window as any).location = url,
			() => console.error("Failed to get Gateway URL.")
		);
	}


}
