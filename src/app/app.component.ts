import { Component } from '@angular/core';
import {IProduct} from "./interfaces/IProduct";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: IProduct[] = [
    {
      _id: '1',
      image: '1.jpg',
      remained: 1
    },
    {
      _id: '2',
      image: '2.jpg',
      remained: 2
    },
    {
      _id: '3',
      image: '3.jpg',
      remained: 0
    },
    {
      _id: '4',
      image: '4.jpg',
      remained: 5
    },
  ];


  getProductImage(productImage: string): string
  {
    return `assets/products/${productImage}`;
  }
}
