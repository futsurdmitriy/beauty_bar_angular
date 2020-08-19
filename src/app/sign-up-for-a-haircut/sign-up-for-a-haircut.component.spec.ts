import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpForAHaircutComponent } from './sign-up-for-a-haircut.component';

describe('SignUpForAHaircutComponent', () => {
  let component: SignUpForAHaircutComponent;
  let fixture: ComponentFixture<SignUpForAHaircutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpForAHaircutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpForAHaircutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
