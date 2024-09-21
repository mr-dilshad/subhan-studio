import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessVideoComponent } from './business-video.component';

describe('BusinessVideoComponent', () => {
  let component: BusinessVideoComponent;
  let fixture: ComponentFixture<BusinessVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
