import { TestBed } from '@angular/core/testing';

import { ReferenteService } from './referente.service';

describe('ReferenteService', () => {
  let service: ReferenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
