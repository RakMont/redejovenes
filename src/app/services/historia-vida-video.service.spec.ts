import { TestBed } from '@angular/core/testing';

import { HistoriaVidaVideoService } from './historia-vida-video.service';

describe('HistoriaVidaVideoService', () => {
  let service: HistoriaVidaVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaVidaVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
