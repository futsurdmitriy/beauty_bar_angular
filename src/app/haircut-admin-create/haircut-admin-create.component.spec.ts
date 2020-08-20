import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutAdminCreateComponent } from './haircut-admin-create.component';

describe('HaircutAdminCreateComponent', () => {
  let component: HaircutAdminCreateComponent;
  let fixture: ComponentFixture<HaircutAdminCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircutAdminCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
