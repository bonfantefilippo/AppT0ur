import { TestBed, inject } from '@angular/core/testing';

import { ArchitectService } from './architect.service';

describe('ArchitectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchitectService]
    });
  });

  it('should be created', inject([ArchitectService], (service: ArchitectService) => {
    expect(service).toBeTruthy();
  }));
});
