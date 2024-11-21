import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSetterComponent } from './goal-setter.component';

describe('GoalSetterComponent', () => {
  let component: GoalSetterComponent;
  let fixture: ComponentFixture<GoalSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalSetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
