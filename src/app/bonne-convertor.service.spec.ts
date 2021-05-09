import { TestBed } from '@angular/core/testing';

import { BonneConvertorService } from './bonne-convertor.service';

describe('BonneConvertorService', () => {
  let service: BonneConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonneConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
