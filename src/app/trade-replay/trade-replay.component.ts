import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-replay',
  templateUrl: './trade-replay.component.html',
  styleUrls: ['./trade-replay.component.css']
})
export class TradeReplayComponent implements OnInit {

   // Stocks in News
   stocksInNews = [
    { name: 'AAPL', ltp: '150.50', change: '+2.00', percentageChange: 1.35 },
    { name: 'GOOG', ltp: '2800.00', change: '-10.00', percentageChange: -0.35 },
    { name: 'AMZN', ltp: '3500.25', change: '+30.25', percentageChange: 0.87 }
  ];

  // Rising Stocks (previously bought)
  risingStocks = [
    { name: 'TSLA', ltp: '720.25', change: '+30.00', percentageChange: 4.35 },
    { name: 'NFLX', ltp: '650.50', change: '+15.75', percentageChange: 2.48 }
  ];

  // Sectors with Top Stocks
  sectors = [
    {
      name: 'Technology',
      topStocks: [
        { name: 'AAPL', ltp: '150.50', change: '+2.00', percentageChange: 1.35 },
        { name: 'GOOG', ltp: '2800.00', change: '-10.00', percentageChange: -0.35 },
        { name: 'MSFT', ltp: '305.75', change: '+5.75', percentageChange: 1.92 }
      ]
    },
    {
      name: 'Consumer Goods',
      topStocks: [
        { name: 'AMZN', ltp: '3500.25', change: '+30.25', percentageChange: 0.87 },
        { name: 'KO', ltp: '56.75', change: '+1.25', percentageChange: 2.26 }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
