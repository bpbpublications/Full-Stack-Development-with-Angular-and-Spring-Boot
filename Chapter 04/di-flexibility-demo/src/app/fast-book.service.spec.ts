import { TestBed } from '@angular/core/testing';

import { FastBookService } from './fast-book.service';

describe('FastBookService', () => {
  let service: FastBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
