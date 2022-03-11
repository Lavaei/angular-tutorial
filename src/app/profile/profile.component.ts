import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

	fullName: string = 'A';

  constructor(protected _changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void {

		interval(100).pipe(
			tap(() => this.fullName = Math.random().toString()),
		).subscribe();
  }

	updateDom(): void
	{
		this._changeDetectionRef.markForCheck();
	}
}
