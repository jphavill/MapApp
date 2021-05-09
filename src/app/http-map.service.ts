import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpMapService {

  constructor(private http: HttpClient) { }

  getCoordinates(){
    console.log(this.http.get('http://localhost:8000/caostlines'));
    return this.http.get('http://localhost:8000/coastlines');
  }

}
