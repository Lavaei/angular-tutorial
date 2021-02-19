import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../interfaces/IProduct";

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit {

  product: IProduct;

  constructor(protected _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => this.getProductDetails(params.id)
    );
  }

  protected getProductDetails(id: string)
  {
    console.log("getProductDetails()")
  }
}
