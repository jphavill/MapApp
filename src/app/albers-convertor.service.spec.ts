import { TestBed } from '@angular/core/testing';

import { AlbersConvertorService } from './albers-convertor.service';

describe('AlbersConvertorService', () => {
  let service: AlbersConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbersConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
