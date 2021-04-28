import { Component, OnInit } from '@angular/core';
import { HttpTestService } from "./http-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'mapapp';

  constructor(private httpTest: HttpTestService) { }

  ngOnInit() {
  }

}
