import { TestBed } from '@angular/core/testing';

import { AccuontDetailsService } from './accuont-details.service';

describe('AccuontDetailsService', () => {
  let service: AccuontDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccuontDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
