import { TestBed, inject } from '@angular/core/testing';

import { ElementScrollPercentService } from './element-scroll-percent.service';

describe('ElementScrollPercentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementScrollPercentService]
    });
  });

  it('should be created', inject([ElementScrollPercentService], (service: ElementScrollPercentService) => {
    expect(service).toBeTruthy();
  }));
});
