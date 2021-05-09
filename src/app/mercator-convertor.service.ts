import {Injectable, OnInit} from '@angular/core';
import {RaidansMathService} from "./raidans-math.service";
import {MapConvertor} from "./map-convertor";

@Injectable({
  providedIn: 'root'
})
export class MercatorConvertorService implements MapConvertor {

  constructor(private rmath: RaidansMathService) { }

  /**
   * converts longitude, latitude coordinates to x, y coordinates using Mercator projection
   *
   * @param lat - the latitude of the coordinate to be converted
   * @param lng - the longitude of the coordinate to be converted
   * @returns the x, y coordinates converted using Mercator projection
   */
  forward(lat: number, lng: number): number[] {
    lat *= -1;
    let x: number = this.rmath.deg2rad(lng);
    let rlat = this.rmath.deg2rad(lat);
    let y;
    if (lat == -90){
      y = 0;
    }

    else if (lat == 90){
      y = 3.14159265358979;
    }
    else {
      y = Math.min(Math.log(Math.sin(rlat) / Math.cos(rlat) + 1 / (Math.cos(rlat))), Math.PI)
    }
    return [x, y * -1];
  }

  backward(x: number, y: number): number[] {
    let lng: number = this.rmath.rad2deg(x);
    let lat: number = this.rmath.rad2deg(Math.atan(Math.sinh(y)));
    return [lat, lng]
  }
}
