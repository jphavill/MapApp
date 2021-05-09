import { TestBed } from '@angular/core/testing';

import { HttpMapService } from './http-map.service';

describe('HttpMapService', () => {
  let service: HttpMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
