import { TestBed } from '@angular/core/testing';

import { RaidansMathService } from './raidans-math.service';

describe('RaidansMathService', () => {
  let service: RaidansMathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaidansMathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
