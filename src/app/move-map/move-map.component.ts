import {Component, OnInit, Output} from '@angular/core';
import { MapOptionsService } from "../map-options.service";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-move-map',
  templateUrl: './move-map.component.html',
  styleUrls: ['./move-map.component.css']
})
export class MoveMapComponent implements OnInit {

  minX: number;
  maxX: number;
  minY: number;
  maxY: number;

  @Output() triggerUpdate = new EventEmitter<number>();

  constructor(private mapOptions: MapOptionsService) { }

  ngOnInit(): void {
    this.mapOptions.sminX.subscribe(minX => this.minX = minX);
    this.mapOptions.smaxX.subscribe(maxX => this.maxX = maxX);
    this.mapOptions.sminY.subscribe(minY => this.minY = minY);
    this.mapOptions.smaxY.subscribe(maxY => this.maxY = maxY);
  }

  zoomIn(): void {
    let xDif: number = this.getXDiff();
    let yDif: number = this.getYDiff();
    this.mapOptions.setMinX(this.minX + xDif);
    this.mapOptions.setMaxX(this.maxX - xDif);
    this.mapOptions.setMinY(this.minY + yDif);
    this.mapOptions.setMaxY(this.maxY - yDif);
    this.triggerUpdate.emit(1);
  }

  zoomOut(): void {
    let xDif: number = this.getXDiff();
    let yDif: number = this.getYDiff();
    this.mapOptions.setMinX(this.minX - xDif);
    this.mapOptions.setMaxX(this.maxX + xDif);
    this.mapOptions.setMinY(this.minY - yDif);
    this.mapOptions.setMaxY(this.maxY + yDif);
    this.triggerUpdate.emit(1);
  }

  panLeft(): void {
    let xDif: number = this.getXDiff();
    this.mapOptions.setMinX(this.minX - xDif);
    this.mapOptions.setMaxX(this.maxX - xDif);
    this.minX -= xDif;
    this.maxX -= xDif;
    this.triggerUpdate.emit(1);
  }

  panUp(): void {
    let yDif: number = this.getYDiff();
    this.mapOptions.setMinY(this.minY + yDif);
    this.mapOptions.setMaxY(this.maxY + yDif);
    this.triggerUpdate.emit(1);
  }

  panDown(): void {
    let yDif: number = this.getYDiff();
    this.mapOptions.setMinY(this.minY - yDif);
    this.mapOptions.setMaxY(this.maxY - yDif);
    this.triggerUpdate.emit(1);
  }

  panRight(): void {
    let xDif: number = this.getXDiff();
    this.mapOptions.setMinX(this.minX + xDif);
    this.mapOptions.setMaxX(this.maxX + xDif);
    this.triggerUpdate.emit(1);
  }

  getXDiff(): number {
    return  (this.maxX - this.minX) * 0.1;
  }

  getYDiff(): number {
    return  (this.maxY - this.minY) * 0.1;
  }
}
