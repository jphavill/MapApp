import { TestBed } from '@angular/core/testing';

import { MercatorConvertorService } from './mercator-convertor.service';

describe('MercatorConvertorService', () => {
  let service: MercatorConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercatorConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
