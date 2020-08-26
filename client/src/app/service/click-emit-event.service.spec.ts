import { TestBed } from '@angular/core/testing';

import { ClickEmitEventService } from './click-emit-event.service';

describe('ClickEmitEventService', () => {
  let service: ClickEmitEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickEmitEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
