import {Injectable} from '@angular/core';
import {RaidansMathService} from "./raidans-math.service";
import {MapConvertor} from "./map-convertor";

@Injectable({
  providedIn: 'root'
})
export class ALbersConvertorService implements MapConvertor {

  private phi1: number;
  private phi2: number;
  private olat: number;
  private olng: number;
  private n: number;
  private C: number;

  constructor(private rmath: RaidansMathService) {
    this.phi1 = this.rmath.deg2rad(0);
    this.phi2 = this.rmath.deg2rad(240);
    this.olat = 0;
    this.olng = 0;
    this.n = (Math.sin(this.phi1) + Math.sin(this.phi2)) / 2;
    this.C = Math.pow((Math.cos(this.phi1)), 2) + 2 * this.n * Math.sin(this.phi1);
  }

  /**
   * converts longitude, latitude coordinates to x, y coordinates using Albers projection
   *
   * @param lat - the latitude of the coordinate to be converted
   * @param lng - the longitude of the coordinate to be converted
   * @returns the x, y coordinates converted using Albers projection
   */
  forward(lat: number, lng: number): number[] {
    lat *= -1;
    let rlat: number = this.rmath.deg2rad(lat);
    let rlng: number = this.rmath.deg2rad(lng);
    let theta = this.n * (rlng - this.olng);
    let p = Math.sqrt(this.C - 2 * this.n * Math.sin(rlat)) / this.n;
    let po = Math.sqrt(this.C - 2 * this.n * Math.sin(this.olat)) / this.n;
    let x = p * Math.sin(theta);
    let y = po - p * Math.cos(theta);
    return [x , y*-1]
  }

  /**
   * converts  x, y coordinates to longitude, latitude coordinates from Albers projection
   *
   * @param x - the x of the coordinate to be converted
   * @param y - the y of the coordinate to be converted
   * @returns the latitude, longitude coordinates converted using Stereo projection
   */
  backward(x: number, y: number): number[] {
    let po: number = Math.sqrt(this.C - 2 * this.n * Math.sin(this.olat)) / this.n;
    let p = Math.sqrt(Math.pow(x, 2) + Math.pow(po - y, 2));
    let theta = Math.atan(x / (po - y));
    let lat = this.rmath.rad2deg(Math.asin((this.C - Math.pow(p, 2) * Math.pow(this.n, 2)) / (2 * this.n))) * -1;
    let lng = this.rmath.rad2deg(this.olng + (theta / this.n));
    return [lat, lng];
  }
}
