import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayResultComponent } from './gateway-result.component';

describe('GatewayResultComponent', () => {
  let component: GatewayResultComponent;
  let fixture: ComponentFixture<GatewayResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewayResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
