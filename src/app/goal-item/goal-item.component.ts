import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.css']
})
export class GoalItemComponent {
  @Input()
  icon!: string;
  @Input()
  text!: string;
  @Input()
  chipText!: string;
  @Input()
  startDate!: string;
  @Input()
  endDate!: string;
  @Input()
  value!: number;
  @Input()
  bufferValue!: number;
  @Input()
  currentValue!: number;
  @Input()
  totalValue!: number;
  @Input()
  id!: number;
  @Input()
  interestedIn!: string[];

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/goal', this.id]);
  }

}
