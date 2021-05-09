import { TestBed } from '@angular/core/testing';

import { MapOptionsService } from './map-options.service';

describe('MapOptionsService', () => {
  let service: MapOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
