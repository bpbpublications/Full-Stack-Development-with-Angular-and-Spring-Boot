import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let   httpTestingController: HttpTestingController;
  let   service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
