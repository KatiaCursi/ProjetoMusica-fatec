import { TestBed } from '@angular/core/testing';

import { MusicasService } from './musica.service';

describe('MusicaService', () => {
  let service: MusicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
