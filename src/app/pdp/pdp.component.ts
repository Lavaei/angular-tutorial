import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../app.service";
import {CartService} from "../cart.service";
import {ICartItem} from "../interfaces/ICartItem";
import {IProduct} from "../interfaces/IProduct";
import {ProductService} from "../product.service";

@Component({
  selector:    'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls:   ['./pdp.component.scss']
})
export class PdpComponent implements OnInit
{

	rate: {[key:string] : number} = {};

	options: {key: string, title: string}[] = [
		{key: 'value', title: 'ارزش در برابر قیمت'},
		{key: 'quality', title: 'کیفیت'}
	];

  product: IProduct = null;

  get user()
  {
  	return this._appService.user;
  }

  constructor(protected _route: ActivatedRoute,
              protected _router: Router,
              protected _appService:AppService,
              protected _productService: ProductService,
              protected _cartService: CartService)
  {
  }

  ngOnInit(): void
  {
    this._route.params.subscribe(
      params => this.getProductDetails(params.id)
    );
  }

  protected getProductDetails(productID: string)
  {
    this._productService.getProduct(productID).subscribe(
      product => this.product = product
    )
  }

  getProductImages()
  {
    return this.product.images.map(image => {
      return {
        title: this.product._id,
        src:   `assets/products/${image}`,
      };
    });
  }

	onRateHandler(event: {originalEvent: MouseEvent, value: number})
	{
		this._productService.createRate(this.product._id, event.value).subscribe(
			() => this.product.rate = event.value
		);
	}

	hasDiscount()
	{
		return this.product.salePrice && this.product.salePrice != this.product.realPrice;
	}

	addToCart()
	{
		this._cartService.addItem(this.product);
	}

	shouldShowQuantity(): boolean
	{
		const ITEM: ICartItem = this._cartService.getItem(this.product._id);

		return !!ITEM;
	}

	getItemQuantity(): number
	{
		const ITEM: ICartItem = this._cartService.getItem(this.product._id);

		return ITEM ? ITEM.count : 0;
	}

	setItemQuantity(quantity: number)
	{
		this._cartService.updateItem(this.product._id, {count: quantity});
	}

	goToCart()
	{
		this._router.navigateByUrl("user/cart");
	}

	onComment()
	{
		console.log(this.rate);
	}
}
