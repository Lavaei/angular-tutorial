import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ICartItem} from "./interfaces/ICartItem";
import {IProduct} from "./interfaces/IProduct";
import {RequestService} from "./request.service";

@Injectable({
	providedIn: 'root'
})
export class CartService
{
	protected readonly localStorageKey: string = 'cart';
	protected cart: ICartItem[]                = [];

	constructor(protected _requestService: RequestService)
	{
		this._loadFromLocalStorage();
	}

	getFreshCart(): Observable<ICartItem[]>
	{
		return this._requestService.get<ICartItem[]>('cart').pipe(
			tap(cart => this.cart = cart),
			tap(() => this._saveToLocalStorage()),
		);
	}

	getAll(): ICartItem[]
	{
		return this.cart;
	}

	getItem(productID: string): ICartItem
	{
		return this.cart.find(item => item.product._id === productID);
	}

	addItem(product: IProduct, count: number = 1): ICartItem
	{
		const ITEM: ICartItem = {product, count};

		const INDEX: number = this.cart.findIndex(item => item.product._id === product._id);

		if (INDEX === -1)
		{
			this.cart.push(ITEM);
		}
		else
		{
			ITEM.count += this.cart[INDEX].count;

			this.updateItem(product._id, ITEM);
		}

		this._saveToLocalStorage();

		return ITEM;
	}

	removeItem(productID: string)
	{
		this.cart = this.cart.filter(item => item.product._id !== productID);

		this._saveToLocalStorage();
	}

	updateItem(productID: string, toUpdate: Partial<ICartItem>): ICartItem
	{
		const INDEX: number = this.cart.findIndex(item => item.product._id === productID);

		if (INDEX === -1)
		{
			return null;
		}

		if (toUpdate.count === 0)
		{
			this.removeItem(productID);

			return null;
		}
		else
		{
			this.cart[INDEX] = {...this.cart[INDEX], ...toUpdate};

			this._saveToLocalStorage();

			return this.cart[INDEX];
		}
	}

	getShippingPrice(): Observable<number>
	{
		return this._requestService.get<number>('cart/shipping');
	}

	protected _saveToLocalStorage()
	{
		localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart));
	}

	protected _loadFromLocalStorage()
	{
		const VALUE: string = localStorage.getItem(this.localStorageKey);

		if (VALUE)
		{
			this.cart = JSON.parse(VALUE);
		}
	}
}
