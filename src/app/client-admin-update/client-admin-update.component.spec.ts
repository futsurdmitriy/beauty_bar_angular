import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminUpdateComponent } from './client-admin-update.component';

describe('ClientAdminUpdateComponent', () => {
  let component: ClientAdminUpdateComponent;
  let fixture: ComponentFixture<ClientAdminUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAdminUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
