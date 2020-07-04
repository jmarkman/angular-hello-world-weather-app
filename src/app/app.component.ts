import { Component } from '@angular/core';
import { WeatherService } from "./weather/weather.service";
import { Weather } from "./weather/weatherdata";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: Weather;
  _zipCode: string = "";
  
  get zipCode() : string {
    return this._zipCode;
  }

  set zipCode(v : string) {
    this._zipCode = v;
  }
  
  errorMessage: string;

  constructor(private weatherService: WeatherService) {  }

  onLookupButtonClicked(): void {
    this.getWeather(this.zipCode);
  }

  getWeather(zipCode: string): void {
    this.weatherService.getWeatherForZipCode(zipCode).subscribe({
      next: weather => this.weatherData = weather,
      error: err => this.errorMessage = err
    });
  }
}
