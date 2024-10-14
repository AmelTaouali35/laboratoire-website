import { TestBed } from '@angular/core/testing';

import { LaboratoirelistserviceService } from './laboratoirelistservice.service';

describe('LaboratoirelistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaboratoirelistserviceService = TestBed.get(LaboratoirelistserviceService);
    expect(service).toBeTruthy();
  });
});
