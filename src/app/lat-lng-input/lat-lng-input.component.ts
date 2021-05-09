import {Component, OnInit, Output} from '@angular/core';
import { MapOptionsService } from "../map-options.service";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-lat-lng-input',
  templateUrl: './lat-lng-input.component.html',
  styleUrls: ['./lat-lng-input.component.css']
})
export class LatLngInputComponent implements OnInit {

  boxMinLng: number;
  boxMaxLng: number;
  boxMinLat: number;
  boxMaxLat: number;

  minLng: number;
  maxLng: number;
  minLat: number;
  maxLat: number;

  @Output() triggerRedraw = new EventEmitter<number>();

  constructor(private mapOptions: MapOptionsService) { }

  ngOnInit(): void {
    this.mapOptions.sminLng.subscribe(minLng => this.minLng = minLng);
    this.mapOptions.smaxLng.subscribe(maxLng => this.maxLng = maxLng);
    this.mapOptions.sminLat.subscribe(minLat => this.minLat = minLat);
    this.mapOptions.smaxLat.subscribe(maxLat => this.maxLat = maxLat);
    this.boxMinLng = this.minLng;
    this.boxMaxLng = this.maxLng;
    this.boxMinLat = this.minLat;
    this.boxMaxLat = this.maxLat;
  }

  updateMap(): void {
    this.mapOptions.setMinLng(this.boxMinLng);
    this.mapOptions.setMaxLng(this.boxMaxLng);
    this.mapOptions.setMinLat(this.boxMinLat);
    this.mapOptions.setMaxLat(this.boxMaxLat);
    this.triggerRedraw.emit(1);
  }
}
