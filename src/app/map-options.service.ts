import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapOptionsService {

  private minX = new BehaviorSubject(-3.14);
  sminX = this.minX.asObservable();
  private maxX = new BehaviorSubject(3.14);
  smaxX = this.maxX.asObservable();
  private minY = new BehaviorSubject(-3.14);
  sminY = this.minY.asObservable();
  private maxY = new BehaviorSubject(3.14);
  smaxY = this.maxY.asObservable();


  private minLat = new BehaviorSubject(-90);
  sminLat = this.minLat.asObservable();
  private maxLat = new BehaviorSubject(90);
  smaxLat = this.maxLat.asObservable();
  private minLng = new BehaviorSubject(-180);
  sminLng = this.minLng.asObservable();
  private maxLng = new BehaviorSubject(180);
  smaxLng = this.maxLng.asObservable();

  constructor() { }

  setMinX(minX: number): void {
    this.minX.next(minX);
  }

  setMaxX(maxX: number): void {
    this.maxX.next(maxX);
  }

  setMinY(minY: number): void {
    this.minY.next(minY);
  }

  setMaxY(maxY: number): void {
    this.maxY.next(maxY);
  }

  setMinLng(minLng: number): void {
    this.minLng.next(minLng);
  }

  setMaxLng(maxLng: number): void {
    this.maxLng.next(maxLng);
  }

  setMinLat(minLat: number): void {
    this.minLat.next(minLat);
  }

  setMaxLat(maxLat: number): void {
    this.maxLat.next(maxLat);
  }

}
