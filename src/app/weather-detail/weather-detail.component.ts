import { Component, Input} from '@angular/core';
import { Weather } from '../weather/weatherdata';

@Component({
  selector: 'hw-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent {
  @Input() weatherData: Weather;
  @Input() zipCode: number;
}
