import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeReplayComponent } from './trade-replay.component';

describe('TradeReplayComponent', () => {
  let component: TradeReplayComponent;
  let fixture: ComponentFixture<TradeReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
