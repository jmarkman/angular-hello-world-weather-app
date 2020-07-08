import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Weather } from '../weather/weatherdata';

@Component({
  selector: 'hw-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnChanges {
  @Input() weatherData: Weather;
  @Input() zipCode: number;

  ngOnChanges(): void {
    throw new Error("Method not implemented.");
  }
}
