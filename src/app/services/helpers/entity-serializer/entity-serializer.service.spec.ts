import { TestBed, inject } from '@angular/core/testing';

import { EntitySerializerService } from './entity-serializer.service';

describe('EntitySerializerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntitySerializerService]
    });
  });

  it('should be created', inject([EntitySerializerService], (service: EntitySerializerService) => {
    expect(service).toBeTruthy();
  }));
});
