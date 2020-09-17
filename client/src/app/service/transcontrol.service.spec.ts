import { TestBed } from '@angular/core/testing';

import { TranscontrolService } from './transcontrol.service';

describe('TranscontrolService', () => {
  let service: TranscontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranscontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
