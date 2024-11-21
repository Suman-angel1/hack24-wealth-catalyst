import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkInvestmentComponent } from './link-investment.component';

describe('LinkInvestmentComponent', () => {
  let component: LinkInvestmentComponent;
  let fixture: ComponentFixture<LinkInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
