import { Injectable } from '@angular/core';
import {RaidansMathService} from "./raidans-math.service";
import {MapConvertor} from "./map-convertor";

@Injectable({
  providedIn: 'root'
})
export class BonneConvertorService implements MapConvertor{

  constructor(private rmath: RaidansMathService) { }

  /**
   * converts longitude, latitude coordinates to x, y coordinates using Bonne projection
   *
   * @param lat - the latitude of the coordinate to be converted
   * @param lng - the longitude of the coordinate to be converted
   * @returns the x, y coordinates converted using Bonne projection
   */
  forward(lat: number, lng: number): number[] {
    [lat, lng] = [this.rmath.deg2rad(lat), this.rmath.deg2rad(lng)];
    let phi1: number = this.rmath.deg2rad(45);
    let lam0: number= 0;
    let p: number = 1/Math.tan(phi1) + phi1 - lat;

    let E: number;
    if (p === 0){
      E = 0
    }
    else{
        E = (lng-lam0)*Math.cos(lat) / p;
      }

    let x = p * Math.sin(E);
    let y = 1 / Math.tan(phi1) - p * Math.cos(E);
    return [x, y]
  }

  backward(x: number, y: number): number[] {
    let phi1: number = this.rmath.deg2rad(45);
    let lam0: number = 0;
    let p: number = Math.sqrt(Math.pow(x, 2) + Math.pow((1/Math.tan(phi1)) - y, 2));
    let lat = this.rmath.rad2deg(1/Math.tan(phi1) + phi1 - p);
    let lng: number;
    if (lat != 90 && lat != 180){
      lng = this.rmath.rad2deg(lam0 + (p/Math.cos(this.rmath.deg2rad(lat))) * Math.atan(x/(1/Math.tan(phi1) - y)));
    }
    else {
      lng = lam0;
    }
    return [lat, lng];
  }
}
