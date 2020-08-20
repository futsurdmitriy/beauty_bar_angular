import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutAdminDeleteComponent } from './haircut-admin-delete.component';

describe('HaircutAdminDeleteComponent', () => {
  let component: HaircutAdminDeleteComponent;
  let fixture: ComponentFixture<HaircutAdminDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircutAdminDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
