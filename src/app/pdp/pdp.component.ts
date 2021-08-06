import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import {IProduct} from "../interfaces/IProduct";
import {ProductService} from "../product.service";

@Component({
  selector:    'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls:   ['./pdp.component.scss']
})
export class PdpComponent implements OnInit
{

  product: IProduct = null;

  get user()
  {
  	return this._appService.user;
  }

  constructor(protected _route: ActivatedRoute,
              protected _appService:AppService,
              protected _productService: ProductService)
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
}
