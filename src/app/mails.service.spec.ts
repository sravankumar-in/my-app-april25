import { TestBed } from '@angular/core/testing';

import { MailsService } from './mails.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('MailsService', () => {
  let service: MailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
