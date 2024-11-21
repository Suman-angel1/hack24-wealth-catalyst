import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  @Input()
  icon!: string;
  @Input()
  text!: string;
  @Input()
  longText: string = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`
  @Input()
  navigateTo!: string;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.navigateTo]);
  }
}
