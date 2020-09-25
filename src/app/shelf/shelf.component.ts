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
  @ViewChild('container') container: ElementRef;

  products: IProduct[] = [];

  constructor(protected _shelfService:ShelfService)
  {
    this._shelfService.getProducts().subscribe(
      (products) => this.products = products,
      error => console.error(error),
      () => console.log('completed')
    );
  }

  ngOnInit(): void
  {

  }

  onProductSelected({product, event}: { product: IProduct, event: MouseEvent })
  {
    const CONTAINER: HTMLDivElement = this.container.nativeElement;

    CONTAINER.style.backgroundColor = "#F00";


    console.log(product, event);
  }

}
