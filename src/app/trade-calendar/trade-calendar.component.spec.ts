import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCalendarComponent } from './trade-calendar.component';

describe('TradeCalendarComponent', () => {
  let component: TradeCalendarComponent;
  let fixture: ComponentFixture<TradeCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
