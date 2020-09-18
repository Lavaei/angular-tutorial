import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../interfaces/IProduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('product') product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

  getProductImage(productImage: string): string
  {
    return `assets/products/${productImage}`;
  }
}
