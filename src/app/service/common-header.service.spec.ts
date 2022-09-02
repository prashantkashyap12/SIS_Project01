import { TestBed } from '@angular/core/testing';

import { CommonHeaderService } from './common-header.service';

describe('CommonHeaderService', () => {
  let service: CommonHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
