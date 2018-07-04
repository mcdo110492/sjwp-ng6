import { TestBed, inject } from '@angular/core/testing';

import { GenerateHashIdService } from './generate-hash-id.service';

describe('GenerateHashIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateHashIdService]
    });
  });

  it('should be created', inject([GenerateHashIdService], (service: GenerateHashIdService) => {
    expect(service).toBeTruthy();
  }));
});
