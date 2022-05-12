import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpMapService {

  constructor(private http: HttpClient) { }

  getCoordinates(){
    console.log(this.http.get('http://localhost:3000/coastlines'));
    return this.http.get('http://localhost:3000/coastlines');
  }

}
