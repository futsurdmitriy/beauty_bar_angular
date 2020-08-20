import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminListComponent } from './client-admin-list.component';

describe('ClientAdminListComponent', () => {
  let component: ClientAdminListComponent;
  let fixture: ComponentFixture<ClientAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
