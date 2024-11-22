import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedExpertsComponent } from './dedicated-experts.component';

describe('DedicatedExpertsComponent', () => {
  let component: DedicatedExpertsComponent;
  let fixture: ComponentFixture<DedicatedExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DedicatedExpertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DedicatedExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
