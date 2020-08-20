import { TestBed } from '@angular/core/testing';

import { HaircutAdminService } from './haircut-admin.service';

describe('HaircutAdminService', () => {
  let service: HaircutAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaircutAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
