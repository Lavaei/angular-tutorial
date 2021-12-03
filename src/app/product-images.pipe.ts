import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "./interfaces/IProduct";

@Pipe({
  name: 'productImages',
})
export class ProductImagesPipe implements PipeTransform {

  transform(product: IProduct): IProductImage[] {
	  return product.images.map(image => {
		  return {
			  title: product._id,
			  src:   `assets/products/${image}`,
		  };
	  });
  }
}

interface IProductImage
{
	title:string,
	src: string
}
