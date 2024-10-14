import { TestBed } from '@angular/core/testing';

import { CompteuserService } from './compteuser.service';

describe('CompteuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompteuserService = TestBed.get(CompteuserService);
    expect(service).toBeTruthy();
  });
});
