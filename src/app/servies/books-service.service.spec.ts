import { TestBed } from '@angular/core/testing';

import { BooksServiceService } from './books-service.service';

describe('BooksServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksServiceService = TestBed.get(BooksServiceService);
    expect(service).toBeTruthy();
  });
});
