import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminDeleteComponent } from './client-admin-delete.component';

describe('ClientAdminDeleteComponent', () => {
  let component: ClientAdminDeleteComponent;
  let fixture: ComponentFixture<ClientAdminDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAdminDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
