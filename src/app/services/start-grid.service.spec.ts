import { TestBed } from '@angular/core/testing';

import { StartGridService } from './start-grid.service';

describe('StartGridService', () => {
  let service: StartGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
