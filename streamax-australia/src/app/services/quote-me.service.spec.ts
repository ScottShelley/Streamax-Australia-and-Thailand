import { TestBed, inject } from '@angular/core/testing';

import { QuoteMeService } from './quote-me.service';

describe('QuoteMeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteMeService]
    });
  });

  it('should be created', inject([QuoteMeService], (service: QuoteMeService) => {
    expect(service).toBeTruthy();
  }));
});
