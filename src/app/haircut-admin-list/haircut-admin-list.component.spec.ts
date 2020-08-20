import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutAdminListComponent } from './haircut-admin-list.component';

describe('HaircutAdminListComponent', () => {
  let component: HaircutAdminListComponent;
  let fixture: ComponentFixture<HaircutAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircutAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
