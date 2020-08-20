import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdminDeleteComponent } from './order-admin-delete.component';

describe('OrderAdminDeleteComponent', () => {
  let component: OrderAdminDeleteComponent;
  let fixture: ComponentFixture<OrderAdminDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAdminDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
