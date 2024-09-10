import { TestBed } from '@angular/core/testing';

import { BookHttpService } from './book-http.service';

describe('BookHttpService', () => {
  let service: BookHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
