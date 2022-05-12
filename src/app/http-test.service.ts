import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpTestService {

  constructor(private http: HttpClient) { }

  getDistance(){
    return this.http.get('http://localhost:3000/distance');
  }

  postCurrentDistance(distance: number){
    this.http.put<any>('http://localhost:3000/distance/1', {len : distance}).subscribe(data => {
    });
  }

  getSleep(){
    return this.http.get('http://localhost:3000/sleep');
  }

  putSleep(hours: number){
    this.http.put<any>('http://localhost:3000/sleep/1', {hours : hours}).subscribe(data => {
    });
  }

}

