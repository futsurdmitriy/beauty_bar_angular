import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutsAdminComponent } from './haircuts-admin.component';

describe('HaircutsAdminComponent', () => {
  let component: HaircutsAdminComponent;
  let fixture: ComponentFixture<HaircutsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircutsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
