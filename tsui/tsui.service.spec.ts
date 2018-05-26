import { TestBed, inject } from '@angular/core/testing';

import { TsuiService } from './tsui.service';

describe('TsuiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsuiService]
    });
  });

  it('should be created', inject([TsuiService], (service: TsuiService) => {
    expect(service).toBeTruthy();
  }));
});
