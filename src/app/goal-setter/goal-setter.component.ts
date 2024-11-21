import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewGoalDialogComponent } from '../add-new-goal-dialog/add-new-goal-dialog.component';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal-setter',
  templateUrl: './goal-setter.component.html',
  styleUrls: ['./goal-setter.component.css']
})
export class GoalSetterComponent implements OnInit {

  goals: any = [];

  constructor(private dialog: MatDialog, private goalService: GoalService) { }

  ngOnInit(): void {
    this.goals = this.goalService.getAllGoals();
  }

  addANewGoal(): void {
    const dialogRef = this.dialog.open(AddNewGoalDialogComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        console.log('Dialog result:', result);
        const endDate = new Date(Date.now());
        endDate.setMonth(endDate.getMonth() + result.tenure);
        this.goalService.addGoal(
          {
            id: this.goals.length + 1,
            icon: result.icon,
            text: result.category,
            chipText: "Lag",
            startDate: Date.now(),
            endDate: endDate,
            value: 0,
            bufferValue: 100,
            investmentAmount: result.investmentAmount,
            currentValue: 0,
            totalValue: result.expectedReturn,
            interestedIn: result.interestedIn
          }
        );
      }
    });
  }

}
