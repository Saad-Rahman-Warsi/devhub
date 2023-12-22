import { TestBed } from '@angular/core/testing';

import { PostqnaService } from './postqna.service';

describe('PostqnaService', () => {
  let service: PostqnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostqnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
