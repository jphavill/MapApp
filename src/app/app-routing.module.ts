import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StreakChartComponent} from "./streak-chart/streak-chart.component";
import {MapsComponent} from "./maps/maps.component";
import {CircleChartComponent} from "./circle-chart/circle-chart.component";

const routes: Routes = [
  {path: 'streak-chart', component: StreakChartComponent},
  {path: 'circle-chart', component: CircleChartComponent},
  {path: 'streak-chart', component: StreakChartComponent},
  {path: 'streak-chart', component: StreakChartComponent},
  {path: 'maps', component: MapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
