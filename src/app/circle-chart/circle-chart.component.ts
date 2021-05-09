import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { HttpMapService } from "../http-map.service"
import { MapOptionsService } from "../map-options.service";
import {MapConvertor} from "../map-convertor";
import {BaseChartDirective} from "ng2-charts";
import * as Chart from "chart.js";

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.css']
})
export class CircleChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) baseChartDir: BaseChartDirective;

  public circleChartOptions;

  public circleChartType = 'scatter';
  public circleChartLegend = false;

  public circleChartData;

  minX: number;
  maxX: number;
  minY: number;
  maxY: number;

  minLng: number;
  maxLng: number;
  minLat: number;
  maxLat: number;

  private coordinates;

  @Input() convert: MapConvertor;

  constructor(private httpMap: HttpMapService, private mapOptions: MapOptionsService) { }

  ngOnInit(): void {
    this.mapOptions.sminX.subscribe(minX => this.minX = minX);
    this.mapOptions.smaxX.subscribe(maxX => this.maxX = maxX);
    this.mapOptions.sminY.subscribe(minY => this.minY = minY);
    this.mapOptions.smaxY.subscribe(maxY => this.maxY = maxY);
    this.mapOptions.sminLng.subscribe(minLng => this.minLng = minLng);
    this.mapOptions.smaxLng.subscribe(maxLng => this.maxLng = maxLng);
    this.mapOptions.sminLat.subscribe(minLat => this.minLat = minLat);
    this.mapOptions.smaxLat.subscribe(maxLat => this.maxLat = maxLat);
    this.updateScale();
    this.display10();
    this.circleChartData = [
      {data: [{x: 0, y:2}, {x: 1, y:3}, {x: 1, y:1}, {x: 2, y:4}, {x: 2, y:0}, {x: 4, y:2}, {x: 3, y:3}, {x: 3, y:1}],
        pointBackgroundColor: "#cc0000", pointBorderColor: "#cc0000",
        pointRadius: 0.1},
    ];

  }

  updateScale(): void {
    console.log("updated");
    this.circleChartOptions = {
      tooltips: {enabled: false},
      hover: {mode: null},
      elements: {
        point: {
          borderWidth: 0,
          fillColor: "rgba(000,000,000,100)"
        }
      },
      animation: false,
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            max : this.maxX,
            min: this.minX,
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            max : this.maxY,
            min: this.minY,
            display: false
          }
        }]
      },
    };
  }


  display10(): void {
      this.httpMap.getCoordinates().subscribe((coorddata) => {
        this.coordinates = coorddata;
    let convertedCoordinates = [];
    let i: number = 0;
    let decimate = 10;
    console.log(this.minLng);
    let max:number = this.coordinates.length;
    while (i<max){
      let [lat, lng] = [this.coordinates[i]["lat"], this.coordinates[i]["lng"]];
      if (lat < this.minLat || lat > this.maxLat || lng < this.minLng || lng > this.maxLng){
        i+= decimate;
        continue;
      }
      let [x, y] = this.convert.forward(lat, lng);
      convertedCoordinates.push({x: x, y: y});
      // i+=Math.max(Math.floor(Math.max(5/Math.max(Math.abs(this.coordinates[i]["lat"]), 1), 1) * decimate), 1);
      i+= decimate;
    }
    console.log("all points pushed");
    this.circleChartData = [{data: convertedCoordinates,
      pointBackgroundColor: "#cc0000", pointBorderColor: "#cc0000",
      pointRadius: 0.1}];
        console.log(this.circleChartData);

    });

  }

  chartClicked(event): void {
    var chartArea = this.baseChartDir.chart.chartArea;
    var yAxis = this.baseChartDir.chart.options.scales.yAxes[0].ticks;
    var yValue = this.map(event.event.layerY, chartArea.bottom, chartArea.top, yAxis.min, yAxis.max);
    var xAxis = this.baseChartDir.chart.options.scales.xAxes[0].ticks;
    var xValue = this.map(event.event.layerX, chartArea.left, chartArea.right, xAxis.min, xAxis.max);
    let [lat, lng] = this.convert.backward(xValue, yValue);
    console.log(lat, lng);
  }

  map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
  };

}
