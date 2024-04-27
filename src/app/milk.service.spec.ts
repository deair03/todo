/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MilkService } from './milk.service';

describe('Service: Milk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilkService]
    });
  });

  it('should ...', inject([MilkService], (service: MilkService) => {
    expect(service).toBeTruthy();
  }));
});
