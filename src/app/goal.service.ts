import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goals = [
    {
      id: 1,
      icon: 'home',
      text: 'Home',
      chipText: 'Lead',
      startDate: this.getRandomDate(),
      endDate: this.getEndDate(this.getRandomDate()),
      value: 50,
      bufferValue: 50,
      currentValue: 500000,
      totalValue: 1000000,
      investmentAmount: 20000,
      interestedIn: ["Delivery", "Mutual Fund"]
    },
    {
      id: 2,
      icon: 'directions_car',
      text: 'Car',
      chipText: 'Lead',
      startDate: this.getRandomDate(),
      endDate: this.getEndDate(this.getRandomDate()),
      value: 60,
      bufferValue: 40,
      currentValue: 300000,
      totalValue: 500000,
      investmentAmount: 15000,
      interestedIn: ["Intra Day", "Commodity"]
    },
    {
      id: 3,
      icon: 'school',
      text: 'Education',
      chipText: 'Lead',
      startDate: this.getRandomDate(),
      endDate: this.getEndDate(this.getRandomDate()),
      value: 80,
      bufferValue: 20,
      currentValue: 800000,
      totalValue: 1000000,
      investmentAmount: 25000,
      interestedIn: ["All"]
    },
    {
      id: 4,
      icon: 'flight_takeoff',
      text: 'Travel',
      chipText: 'Lag',
      startDate: this.getRandomDate(),
      endDate: this.getEndDate(this.getRandomDate()),
      value: 20,
      bufferValue: 80,
      currentValue: 20000,
      totalValue: 100000,
      investmentAmount: 5000,
      interestedIn: ["Delivery", "Mutual Fund"]
    },
    {
      id: 5,
      icon: 'fitness_center',
      text: 'Fitness',
      chipText: 'Lag',
      startDate: this.getRandomDate(),
      endDate: this.getEndDate(this.getRandomDate()),
      value: 10,
      bufferValue: 90,
      currentValue: 1000,
      totalValue: 10000,
      investmentAmount: 500,
      interestedIn: ["Intra Day", "Commodity"]
    },
    {
      id: 6,
      icon: 'business',
      text: 'Business',
      chipText: 'Lead',
      startDate: this.getRandomDate(),
      endDate: this.getEndDate(this.getRandomDate()),
      value: 90,
      bufferValue: 10,
      currentValue: 900000,
      totalValue: 1000000,
      investmentAmount: 30000,
      interestedIn: ["All"]
    },
    {
      id: 7,
      icon: 'celebration',
      text: 'Wedding',
      chipText: 'Lead',
      startDate: this.getRandomDate(),
      endDate: this.getEndDate(this.getRandomDate()),
      value: 85,
      bufferValue: 15,
      currentValue: 850000,
      totalValue: 1000000,
      investmentAmount: 28000,
      interestedIn: ["Delivery", "Mutual Fund"]
    }
  ];

  private getRandomDate(): string {
    const start = new Date(2024, 0, 1);
    const end = new Date(2024, 11, 20);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
  }

  private getEndDate(startDate: string): string {
    const start = new Date(startDate);
    const end = new Date(start.setFullYear(start.getFullYear() + Math.random() * 10));
    return end.toISOString().split('T')[0];
  }

  addGoal(goal: any) {
    this.goals.push(goal);
  }

  getAllGoals() {
    return this.goals;
  }

  getGoal(id: number) {
    return this.goals.find(goal => goal.id === id);
  }

  constructor() { }
}
