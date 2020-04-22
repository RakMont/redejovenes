import { TestBed } from '@angular/core/testing';

import { TeofrecemosService } from './teofrecemos.service';

describe('TeofrecemosService', () => {
  let service: TeofrecemosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeofrecemosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
