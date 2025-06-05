import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { FlipkartComponent } from './flipkart.component';
import { FormsModule } from '@angular/forms';


describe('FlipkartComponent', () => {
  let component: FlipkartComponent;
  let fixture: ComponentFixture<FlipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartComponent ],
      imports: [HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
