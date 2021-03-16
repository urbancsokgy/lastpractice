import { TestBed } from '@angular/core/testing';

import { HerotwoService } from './herotwo.service';

describe('HerotwoService', () => {
  let service: HerotwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerotwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
