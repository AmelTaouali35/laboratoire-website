import { TestBed } from '@angular/core/testing';

import { ListClientService } from './list-client.service';

describe('ListClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListClientService = TestBed.get(ListClientService);
    expect(service).toBeTruthy();
  });
});
