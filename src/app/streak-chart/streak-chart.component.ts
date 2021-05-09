import { Component, OnInit } from '@angular/core';
import { HttpTestService } from "../http-test.service"


@Component({
  selector: 'app-streak-chart',
  templateUrl: './streak-chart.component.html',
  styleUrls: ['./streak-chart.component.css']
})
export class StreakChartComponent implements OnInit {

  public streakChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public streakChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public streakChartType = 'bar';
  public streakChartLegend = true;

  sleepHours: number;
  textValue: string;

  public streakChartData;

  constructor(private httpTest: HttpTestService) { }

  ngOnInit(): void {
    this.sleepHours = 8;
    this.streakChartData = [
      {data: [this.sleepHours, 7.5, 5.65, 9.75, 8.88, 8.22, 7], label: 'Week 1' },
      {data: [3.23, 2.5, 1.65, 2.75, 3.88, 4.22, 5], label: 'Week 2'}
    ];
    this.textValue = this.formatSleep();
  }


  formatSleep(){
    this.streakChartData[0].data = [this.sleepHours, 7.5, 5.65, 9.75, 8.88, 8.22, 7];
    console.log(this.streakChartData);
    return this.textValue = this.sleepHours + ' hours';

  }

  saveSleep(){
    this.sleepHours = parseFloat(this.textValue.split(" ")[0]);
    this.formatSleep();
    this.httpTest.putSleep(this.sleepHours);
  }

  retrieveSleep(){
    this.httpTest.getSleep().subscribe((data: number)=>{
      this.sleepHours = data[0]["hours"];
      console.log(data);
      this.formatSleep()
    })
  }


}
