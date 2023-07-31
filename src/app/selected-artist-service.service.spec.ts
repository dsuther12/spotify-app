import { TestBed } from '@angular/core/testing';

import { SelectedArtistServiceService } from './selected-artist-service.service';

describe('SelectedArtistServiceService', () => {
  let service: SelectedArtistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedArtistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
