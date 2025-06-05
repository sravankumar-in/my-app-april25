import { TestBed } from '@angular/core/testing';

import { Flipkart1Service } from './flipkart1.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Flipkart1Service', () => {
  let service: Flipkart1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(Flipkart1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
