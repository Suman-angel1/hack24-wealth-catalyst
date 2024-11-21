import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentMonth: string = 'November'; 
  currentYear: number = 2024;
  currentMonthIndex: number = 11;
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dates: any[] = [];
  selectedDate: any;
  newEvent: string = '';
  globalEvents: string[] = [
  'RBI hikes repo rate by 25 basis points',
  'Reliance Industries announces new oil discovery',
  'TCS reports 15% increase in quarterly profits',
  'Infosys to buy back shares worth $1 billion'
  ]
  todayDay: number = new Date().getDate();

  constructor(public eventService: EventService, private snackbar: MatSnackBar) {}

  ngOnInit() {
    const today = new Date();
    this.currentMonthIndex = today.getMonth();
    this.currentYear = today.getFullYear();
    this.updateCurrentMonth();
    this.generateCalendar();
    this.selectedDate = this.dates.find(date => date.day === this.todayDay);
  }

  updateCurrentMonth() {
    this.currentMonth = new Date(this.currentYear, this.currentMonthIndex).toLocaleString('default', { month: 'long' });
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonthIndex, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonthIndex + 1, 0).getDate();
    this.dates = [];

    for (let i = 0; i < firstDay; i++) {
      this.dates.push({ day: '', events: [] });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = { day: i, events: this.eventService.getEvents(this.currentYear, this.currentMonthIndex, i) };
      this.dates.push(date);
    }
  }

  prevMonth() {
    if (this.currentMonthIndex === 0) {
      this.currentYear--;
      this.currentMonthIndex = 11;
    } else {
      this.currentMonthIndex--;
    }
    this.updateCurrentMonth();
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonthIndex === 11) {
      this.currentYear++;
      this.currentMonthIndex = 0;
    } else {
      this.currentMonthIndex++;
    }
    this.updateCurrentMonth();
    this.generateCalendar();
  }

  selectDate(date: any) {
    this.selectedDate = date;
  }

  addEvent() {
    if (this.newEvent && this.selectedDate) {
      this.eventService.addEvent(this.currentYear, this.currentMonthIndex, this.selectedDate.day, this.newEvent);
      //this.selectedDate.events.push(this.newEvent);
      this.newEvent = '';
    }
  }

  addAlert() {
    if (this.newEvent && this.selectedDate) {
      this.snackbar.open('Alert added successfully', 'Close', { duration: 2000 });
      this.eventService.addEvent(this.currentYear, this.currentMonthIndex, this.selectedDate.day, this.newEvent);
      //this.selectedDate.events.push(this.newEvent);
      this.newEvent = '';
    }
  }
}