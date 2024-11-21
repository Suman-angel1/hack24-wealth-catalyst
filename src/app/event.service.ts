import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: any = {};

  constructor() {
    this.addEvent(2024, 10, 1, 'Commodity Expiry: Gold');
    this.addEvent(2024, 10, 5, 'IPO Listing: ABC Corp');
    this.addEvent(2024, 10, 15, 'Commodity Expiry: Silver');
    this.addEvent(2024, 10, 20, 'IPO Listing: XYZ Inc');
    this.addEvent(2024, 11, 1, 'Commodity Expiry: Crude Oil');
    this.addEvent(2024, 11, 10, 'IPO Listing: DEF Ltd');
    this.addEvent(2024, 11, 15, 'Commodity Expiry: Natural Gas');
    this.addEvent(2024, 11, 25, 'IPO Listing: GHI Plc');
  }

  getEvents(year: number, month: number, day: number): string[] {
    const key = `${year}-${month}-${day}`;
    return this.events[key] || [];
  }

  addEvent(year: number, month: number, day: number, event: string) {
    const key = `${year}-${month}-${day}`;
    if (!this.events[key]) {
      this.events[key] = [];
    }
    this.events[key].push(event);
  }
}
