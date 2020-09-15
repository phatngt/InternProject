import { TestBed } from '@angular/core/testing';

import { ViewtableService } from './viewtable.service';

describe('ViewtableService', () => {
  let service: ViewtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
