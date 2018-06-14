import { TestBed, inject } from '@angular/core/testing';

import { MinistersService } from './ministers.service';

describe('MinistersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinistersService]
    });
  });

  it('should be created', inject([MinistersService], (service: MinistersService) => {
    expect(service).toBeTruthy();
  }));
});
