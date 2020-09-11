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
      image: '1.jpg'
    },
    {
      _id: '2',
      image: '2.jpg'
    },
    {
      _id: '3',
      image: '3.jpg'
    },
    {
      _id: '4',
      image: '4.jpg'
    },
  ];


  getProductImage(productImage: string): string
  {
    return `assets/products/${productImage}`;
  }
}
