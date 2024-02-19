import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilterComponent } from './all-filter.component';

describe('AllFilterComponent', () => {
  let component: AllFilterComponent;
  let fixture: ComponentFixture<AllFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
