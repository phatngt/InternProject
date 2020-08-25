import { TestBed } from '@angular/core/testing';

import { TransdataService } from './transdata.service';

describe('TransdataService', () => {
  let service: TransdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
