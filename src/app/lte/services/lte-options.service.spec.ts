/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LteOptionsService } from './lte-options.service';

describe('LteOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LteOptionsService]
    });
  });

  it('should ...', inject([LteOptionsService], (service: LteOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
