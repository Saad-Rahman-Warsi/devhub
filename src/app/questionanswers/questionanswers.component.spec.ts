import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionanswersComponent } from './questionanswers.component';

describe('QuestionanswersComponent', () => {
  let component: QuestionanswersComponent;
  let fixture: ComponentFixture<QuestionanswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionanswersComponent]
    });
    fixture = TestBed.createComponent(QuestionanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
