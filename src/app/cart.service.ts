import {Injectable} from '@angular/core';
import {ICartItem} from "./interfaces/ICartItem";
import {IProduct} from "./interfaces/IProduct";

@Injectable({
	providedIn: 'root'
})
export class CartService
{
	protected readonly localStorageKey: string = 'cart';
	protected cart: ICartItem[] = [];

	constructor()
	{
		this._loadFromLocalStorage();
	}

	getAll(): ICartItem[]
	{
		return this.cart;
	}

	addItem(product: IProduct, count: number = 1): ICartItem
	{
		const ITEM: ICartItem = {product, count};

		const INDEX: number = this.cart.findIndex(item => item.product._id === product._id);

		if(INDEX === -1)
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

		this.cart[INDEX] = {...this.cart[INDEX], ...toUpdate};

		this._saveToLocalStorage();

		return this.cart[INDEX];
	}

	protected _saveToLocalStorage()
	{
		localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart));
	}

	protected _loadFromLocalStorage()
	{
		const VALUE: string = localStorage.getItem(this.localStorageKey);

		if(VALUE)
		{
			this.cart = JSON.parse(VALUE);
		}
	}
}
