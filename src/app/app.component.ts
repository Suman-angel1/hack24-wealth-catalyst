import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wealth-catalyst';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
