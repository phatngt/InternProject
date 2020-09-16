import { TestBed } from '@angular/core/testing';

import { TransdatatoappService } from './transdatatoapp.service';

describe('TransdatatoappService', () => {
  let service: TransdatatoappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransdatatoappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
