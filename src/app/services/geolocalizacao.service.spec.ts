import { TestBed } from '@angular/core/testing';

import { GeoLocService } from './geolocalizacao.service';

describe('GeoLocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoLocService = TestBed.get(GeoLocService);
    expect(service).toBeTruthy();
  });
});