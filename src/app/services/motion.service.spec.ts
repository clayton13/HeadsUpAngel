import { TestBed } from '@angular/core/testing';

import { MotionService } from './motion.service';

describe('MotionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotionService = TestBed.get(MotionService);
    expect(service).toBeTruthy();
  });
});
