import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-link-investment',
  templateUrl: './link-investment.component.html',
  styleUrls: ['./link-investment.component.css']
})
export class LinkInvestmentComponent implements OnInit {

  instruments: any = [];

  instruments1 = [
    { name: 'ESOPs/RSUs', icon: 'payments' },
    { name: 'Private Equity', icon: 'account_balance' },
    { name: 'Gold', icon: 'paid' },
    { name: 'Silver', icon: 'toll' },
    { name: 'Real Estate', icon: 'store' },
    { name: 'Cash Investments', icon: 'savings' },
    { name: 'Structured Bonds', icon: 'request_quote' },
    { name: 'Art & Artifacts', icon: 'draw_abstract' },
    { name: 'AIF', icon: 'money_bag' },
    { name: 'Digital Assets', icon: 'currency_bitcoin' },
    { name: 'Others', icon: 'money' },
  ];

instruments2 = [
    { name: 'Quarterly Reports', icon: 'summarize' },
    { name: 'Yearly Reports', icon: 'library_books' },
    { name: 'IPO Listing', icon: 'art_track' },
    { name: 'Commodity Expiry', icon: 'playlist_remove' },
    { name: 'F&O Expiry', icon: 'playlist_remove' },
    { name: 'Commodity Live Trading', icon: 'play_arrow' },
    { name: 'F&O Live Trading', icon: 'play_circle' },
    { name: 'Bond Listing', icon: 'speed' },
    { name: 'Others', icon: 'playlist_add' },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean) { 
    this.instruments = data ? this.instruments2 : this.instruments1;
  }

  ngOnInit(): void {
    
  }

}
