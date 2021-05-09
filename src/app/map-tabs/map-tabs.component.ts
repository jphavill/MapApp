import { Component, OnInit } from '@angular/core';
import {MercatorConvertorService} from "../mercator-convertor.service";
import {ALbersConvertorService} from "../albers-convertor.service";
import {BonneConvertorService} from "../bonne-convertor.service";
import {StereoConvertorService} from "../stereo-convertor.service";

@Component({
  selector: 'app-map-tabs',
  templateUrl: './map-tabs.component.html',
  styleUrls: ['./map-tabs.component.css']
})
export class MapTabsComponent implements OnInit {

  constructor(public mercatorConvertor: MercatorConvertorService,
              public albersConvertor: ALbersConvertorService,
              public bonneConvertor: BonneConvertorService,
              public stereoConvertor: StereoConvertorService) { }

  ngOnInit(): void {
  }

}
