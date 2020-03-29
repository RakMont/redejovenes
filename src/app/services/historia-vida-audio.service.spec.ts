import { TestBed } from '@angular/core/testing';

import { HistoriaVidaAudioService } from './historia-vida-audio.service';

describe('HistoriaVidaAudioService', () => {
  let service: HistoriaVidaAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaVidaAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
