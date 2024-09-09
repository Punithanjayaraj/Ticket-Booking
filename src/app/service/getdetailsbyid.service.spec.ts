import { TestBed } from '@angular/core/testing';

import { GetdetailsbyidService } from './getdetailsbyid.service';

describe('GetdetailsbyidService', () => {
  let service: GetdetailsbyidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdetailsbyidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
