import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashsummaryComponent } from './dashsummary.component';

describe('DashsummaryComponent', () => {
  let component: DashsummaryComponent;
  let fixture: ComponentFixture<DashsummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashsummaryComponent]
    });
    fixture = TestBed.createComponent(DashsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
