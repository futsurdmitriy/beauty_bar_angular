import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminCreateComponent } from './client-admin-create.component';

describe('ClientAdminCreateComponent', () => {
  let component: ClientAdminCreateComponent;
  let fixture: ComponentFixture<ClientAdminCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAdminCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
