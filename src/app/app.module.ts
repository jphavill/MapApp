import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DistanceDisplayComponent } from './distance-display/distance-display.component';
import {FormsModule} from "@angular/forms";

// charts
import { ChartsModule } from 'ng2-charts';
import { StreakChartComponent } from './streak-chart/streak-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { MapTabsComponent } from './map-tabs/map-tabs.component';
import { MapsComponent } from './maps/maps.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { CoordinateSorterComponent } from './coordinate-sorter/coordinate-sorter.component';
import { LatLngInputComponent } from './lat-lng-input/lat-lng-input.component';
import { MoveMapComponent } from './move-map/move-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DistanceDisplayComponent,
    StreakChartComponent,
    MapTabsComponent,
    MapsComponent,
    CircleChartComponent,
    CoordinateSorterComponent,
    LatLngInputComponent,
    MoveMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
