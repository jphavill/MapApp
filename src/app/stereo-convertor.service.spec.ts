import { TestBed } from '@angular/core/testing';

import { StereoConvertorService } from './stereo-convertor.service';

describe('StereoConvertorService', () => {
  let service: StereoConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StereoConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
