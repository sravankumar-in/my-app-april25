import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flipkart1Component } from './flipkart1.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Flipkart1Component', () => {
  let component: Flipkart1Component;
  let fixture: ComponentFixture<Flipkart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flipkart1Component ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flipkart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
