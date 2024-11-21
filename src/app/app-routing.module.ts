import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalSetterComponent } from './goal-setter/goal-setter.component';
import { GoalComponent } from './goal/goal.component';
import { HomeComponent } from './home/home.component';
import { TradeCalendarComponent } from './trade-calendar/trade-calendar.component';
import { TradeReplayComponent } from './trade-replay/trade-replay.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'goal-setter', component: GoalSetterComponent },
  { path: 'trade-calendar', component: TradeCalendarComponent },
  { path: 'trade-replay', component:  TradeReplayComponent},
  { path: 'goal/:id', component:  GoalComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }