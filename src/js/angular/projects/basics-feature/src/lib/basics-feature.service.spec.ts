import { TestBed } from '@angular/core/testing';

import { BasicsFeatureService } from './basics-feature.service';

describe('BasicsFeatureService', () => {
  let service: BasicsFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicsFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
