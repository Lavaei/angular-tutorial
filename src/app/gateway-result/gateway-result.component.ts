import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateway-result',
  templateUrl: './gateway-result.component.html',
  styleUrls: ['./gateway-result.component.scss']
})
export class GatewayResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

	isPaymentFailed(): boolean
	{
		return false;
	}
}
