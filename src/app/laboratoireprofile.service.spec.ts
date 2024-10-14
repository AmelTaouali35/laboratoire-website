import { TestBed } from '@angular/core/testing';

import { LaboratoireprofileService } from './laboratoireprofile.service';

describe('LaboratoireprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaboratoireprofileService = TestBed.get(LaboratoireprofileService);
    expect(service).toBeTruthy();
  });
});
