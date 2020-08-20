import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutAdminUpdateComponent } from './haircut-admin-update.component';

describe('HaircutAdminUpdateComponent', () => {
  let component: HaircutAdminUpdateComponent;
  let fixture: ComponentFixture<HaircutAdminUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircutAdminUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
