import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsComponent } from './mails.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('MailsComponent', () => {
  let component: MailsComponent;
  let fixture: ComponentFixture<MailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailsComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
