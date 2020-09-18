import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../interfaces/IProduct";
import {ShelfService} from "../shelf.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('product') product: IProduct;

  @Output('onClick') onClick:EventEmitter<{product: IProduct, event: MouseEvent}> = new EventEmitter<{product: IProduct, event: MouseEvent}>();

  constructor(protected _shelfService: ShelfService) { }

  ngOnInit(): void {
  }

  getProductImage(productImage: string): string
  {
    return `assets/products/${productImage}`;
  }

  onClickHandler(event: MouseEvent)
  {
    this._shelfService.p1++;

    this.onClick.emit({product: this.product, event});
  }
}
