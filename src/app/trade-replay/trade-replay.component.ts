import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

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

  selectedDate: string = '';
  selectedRiskLevel: string = 'Low-Risk';

  riskLevels: string[] = ['Low-Risk', 'Medium-Risk', 'High-Risk'];

  profitMetrics = [
    { name: 'Before Expiry', key: 'beforeExpiry' },
    { name: 'On Expiry', key: 'onExpiry' },
    { name: 'With Stop Loss', key: 'withStopLoss' },
    { name: 'Without Stop Loss', key: 'withoutStopLoss' },
  ];

  profitData: Record<string, Record<string, number>> = {
    'Low-Risk': { beforeExpiry: 500, onExpiry: 700, withStopLoss: 450, withoutStopLoss: 300 },
    'Medium-Risk': { beforeExpiry: 800, onExpiry: 1000, withStopLoss: 700, withoutStopLoss: 500 },
    'High-Risk': { beforeExpiry: 300, onExpiry: 500, withStopLoss: 250, withoutStopLoss: 150 },
  };


  barChart!: Chart;
  pieChart!: Chart;

  ngOnInit() {
    this.renderBarChart();
    this.renderPieChart();
  }

  selectRiskLevel(level: string) {
    this.selectedRiskLevel = level;
  }

  renderBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.profitMetrics.map((m) => m.name),
        datasets: this.riskLevels.map((level, index) => ({
          label: level,
          data: this.profitMetrics.map((m) => this.profitData[level][m.key] || 0), // Safeguard against undefined values
          backgroundColor: `rgba(${100 + index * 50}, 100, ${200 - index * 50}, 0.7)`,
        })),
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }

  renderPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.riskLevels,
        datasets: [
          {
            data: this.riskLevels.map((level) =>
              Object.values(this.profitData[level] || {}).reduce((sum, value) => sum + (value || 0), 0) // Safeguard against undefined values
            ),
            backgroundColor: ['#ff6f00', '#ffcc00', '#4caf50'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }

  constructor() { }

}
