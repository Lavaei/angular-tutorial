import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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

  constructor(protected _route: ActivatedRoute,
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

  //getProductImage(productImages: string[]): string
  //{
  //  return `assets/products/${productImages[0]}`;
  //}
}
