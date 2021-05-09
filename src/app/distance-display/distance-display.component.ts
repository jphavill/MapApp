import { Component, OnInit } from '@angular/core';
import { HttpTestService } from "../http-test.service"
@Component({
  selector: 'app-distance-display',
  templateUrl: './distance-display.component.html',
  styleUrls: ['./distance-display.component.css']
})
export class DistanceDisplayComponent implements OnInit {
  distance: number;
  textValue: string;
  constructor(private httpTest: HttpTestService) { }



  ngOnInit(): void {
    this.distance = 0;
    this.textValue = this.formatDistance();
  }

  decrementDistance(){
    this.distance--;
    this.formatDistance()
  }

  incrementDistance(){
    this.distance++;
    this.formatDistance()
  }

  resetDistance(){
    this.distance = 0;
    this.formatDistance()
  }

  formatDistance(){
    return this.textValue = this.distance + ' km';
  }

  saveDistance(){
    this.distance = parseFloat(this.textValue.split(" ")[0]);
    this.formatDistance();
    this.httpTest.postCurrentDistance(this.distance);
  }

  retrieveDistance(){
    this.httpTest.getDistance().subscribe((data: number)=>{
      this.distance = data[0]["len"];
      console.log(data);
      this.formatDistance()
  })
  }

}
