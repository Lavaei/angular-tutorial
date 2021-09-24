import { Component, OnInit } from '@angular/core';
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

  constructor(protected _cartService: CartService) { }

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
}
