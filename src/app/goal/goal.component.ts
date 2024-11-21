import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  id: number = 0;
  goal: any = {};
  minPercentage = 0;
  maxPercentage = 100;

  activeTab: string = 'gainers'; // Default tab

  topGainers = [
    { symbol: 'KIRLOSBROS', name: 'Kirloskar Brothers Ltd', price: 2187.15, change: 162.7, percentageChange: 8.04 },
    { symbol: 'CRAFTSMAN', name: 'Craftsman Automation Ltd', price: 5009.25, change: 349.4, percentageChange: 7.5 },
    { symbol: 'APARINDS', name: 'Apar Industries Ltd.', price: 9479.3, change: 658.25, percentageChange: 7.46 },
    { symbol: 'VGUARD', name: 'V-guard Ind Ltd.', price: 425.55, change: 28.75, percentageChange: 7.25 },
    { symbol: 'EIDPARRY', name: 'Eid Parry India Ltd.', price: 822.25, change: 55.55, percentageChange: 7.25 },
  ];

  constructor(private route: ActivatedRoute, private goalService: GoalService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : 0; 
      console.log('Goal ID:', this.id);
      // Handle the id as needed
      console.log('Goal:', this.goalService.getGoal(this.id));
      this.goal = this.goalService.getGoal(this.id);

      this.minPercentage = this.goal.currentValue / this.goal.totalValue * 100;
      this.maxPercentage = 100 - this.minPercentage
    });
  }

  getChartGradient(): string {
    return `conic-gradient(
    #4a90d9 0% ${this.minPercentage}%,
    #d97a4a ${this.minPercentage}% ${this.minPercentage + this.maxPercentage}%,
    #e0e0e0 ${this.minPercentage + this.maxPercentage}% 100%
    )`;
  }

  monthsRemaining(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  }

  topLosers = [
    { symbol: 'XYZ', name: 'XYZ Corporation', price: 150.25, change: -10.5, percentageChange: -6.5 },
    { symbol: 'ABC', name: 'ABC Ltd.', price: 320.1, change: -25.8, percentageChange: -7.4 },
    // Add more losers here
  ];

  get activeStocks() {
    return this.activeTab === 'gainers' ? this.topGainers : this.topLosers;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


}
