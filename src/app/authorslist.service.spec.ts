import { TestBed } from '@angular/core/testing';

import { AuthorslistService } from './authorslist.service';

describe('AuthorslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorslistService = TestBed.get(AuthorslistService);
    expect(service).toBeTruthy();
  });
});
