import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewGoalDialogComponent } from './add-new-goal-dialog.component';

describe('AddNewGoalDialogComponent', () => {
  let component: AddNewGoalDialogComponent;
  let fixture: ComponentFixture<AddNewGoalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewGoalDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewGoalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
