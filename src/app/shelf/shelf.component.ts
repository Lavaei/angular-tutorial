import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {filter, map} from "rxjs/operators";
import {IProduct} from "../interfaces/IProduct";
import {ShelfService} from "../shelf.service";

@Component({
  selector:    'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls:   ['./shelf.component.scss'],
  providers:   [ShelfService]
})
export class ShelfComponent implements OnInit
{
  backgroundColor      = "#FFFFFF";
  products: IProduct[] = [];

  constructor(protected _shelfService: ShelfService)
  {

  }

  ngOnInit(): void
  {
    this._shelfService.getProducts().subscribe(
      (products) => this.products = products,
      error => console.error(error),
      () => console.log('completed')
    );
  }

  ngAfterViewInit()
  {

  }

  ngOnDestroy()
  {

  }

  onProductSelected({product, event}: { product: IProduct, event: MouseEvent })
  {
    if (this.backgroundColor === "#FFFFFF")
    {
      this.backgroundColor = "#F00";
    }
    else
    {
      this.backgroundColor = "#FFFFFF";
    }

    console.log(product, event);
  }

}
