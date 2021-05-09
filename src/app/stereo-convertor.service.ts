import { Injectable } from '@angular/core';
import {RaidansMathService} from "./raidans-math.service";

@Injectable({
  providedIn: 'root'
})
export class StereoConvertorService {


  private lng0: number;
  private phi1: number;


  constructor(private rmath: RaidansMathService) {
    this.lng0 = 0;
    this.phi1 = 0;
  }

  /**
   * converts longitude, latitude coordinates to x, y coordinates using Stereo projection
   *
   * @param lat - the latitude of the coordinate to be converted
   * @param lng - the longitude of the coordinate to be converted
   * @returns the x, y coordinates converted using Stereo projection
   */
  forward(lat: number, lng: number): number[] {
    let rlat: number = this.rmath.deg2rad(lat);
    let rlng: number = this.rmath.deg2rad(lng);
    let k: number;
    if (Math.cos(this.phi1)*Math.cos(rlat)*Math.cos(rlng-this.lng0) != -1){
      k = 2/(1 + Math.sin(this.phi1) * Math.sin(rlat) + Math.cos(this.phi1)*Math.cos(rlat)*Math.cos(rlng-this.lng0))
    }
    else{
      k = 0;
    }
    let x: number = k * Math.cos(rlat) * Math.sin(rlng-this.lng0);
    let y: number = k * (Math.cos(this.phi1)*Math.sin(rlat) - Math.sin(this.phi1)*Math.cos(rlat)*Math.cos(rlng-this.lng0));
    return [x, y]
  }

  backward(x: number, y: number): number[] {
    let p: number = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    let c: number = 2 * Math.atan(p/2);
    let lat: number = this.rmath.rad2deg(Math.asin(Math.cos(c)*Math.sin(this.phi1)+((y*Math.sin(c)*Math.cos(this.phi1))/p)));
    let lng: number = this.rmath.rad2deg(this.lng0 + Math.atan((x * Math.sin(c)) / (p * Math.cos(this.phi1)*Math.cos(c)-y*Math.sin(this.phi1)*Math.sin(c))));
    return [lat, lng]
  }
}

