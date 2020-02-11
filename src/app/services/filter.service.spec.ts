import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true', () => {
    const serviceOne = service.filterFn(1, 5);
    const result = serviceOne(3);
    expect(result).toEqual(true);
  });

  it('should return false', () => {
    const serviceTwo = service.filterFn(1, 5);
    const result = serviceTwo(7);
    expect(result).toEqual(false);
  });
});
