import {Component, OnInit} from '@angular/core';
import {IProduct} from "../interfaces/IProduct";
import {ShelfService} from "../shelf.service";

@Component({
  selector:    'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls:   ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit
{

  products: IProduct[] = [
    {
      _id:      '1',
      image:    '1.jpg',
      remained: 1
    },
    {
      _id:      '2',
      image:    '2.jpg',
      remained: 0
    },
    {
      _id:      '3',
      image:    '3.jpg',
      remained: 3
    },
    {
      _id:      '4',
      image:    '4.jpg',
      remained: 5
    },
  ];

  constructor(protected _shelfService: ShelfService)
  {
    setInterval(() => console.log(this._shelfService.p1), 1000);
  }

  ngOnInit(): void
  {
  }

  onProductSelected({product, event}: {product: IProduct, event: MouseEvent})
  {
    console.log(product, event);
  }

}
