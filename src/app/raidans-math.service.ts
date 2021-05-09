import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaidansMathService {

  constructor() { }

  rad2deg(radians: number): number {
    return radians * 180 / Math.PI;
  }

  deg2rad(degrees:number): number {
    return degrees * Math.PI / 180;
  }

}
