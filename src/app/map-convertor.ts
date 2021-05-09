import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export abstract class MapConvertor {
  abstract forward(lat: number, lng: number): number[];

  abstract backward(x: number, y: number): number[];
}
