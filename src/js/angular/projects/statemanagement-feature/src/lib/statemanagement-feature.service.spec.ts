import { TestBed } from '@angular/core/testing';

import { StatemanagementFeatureService } from './statemanagement-feature.service';

describe('StatemanagementFeatureService', () => {
  let service: StatemanagementFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatemanagementFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
