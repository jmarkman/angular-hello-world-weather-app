import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { Weather } from "./weatherdata";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private weatherApiUrl: string = "https://api.openweathermap.org/data/2.5/weather";
    private apiKey: string;

    constructor(private http: HttpClient) { }

    getWeatherForZipCode(zipCode: string): Observable<Weather | undefined> {
        let apiUrl: string = `${this.weatherApiUrl}?zip=${zipCode},us&units=Imperial&appid=${this.apiKey}`;
        return this.http.get<Weather>(apiUrl);
    }
}