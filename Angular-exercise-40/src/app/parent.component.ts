import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "parent",
  template: `
    <h1>Using Querystring Parameters</h1>
    <form>
      City: <input type="text" name="city" [(ngModel)]="city" /> <br /><br />
      <button class="btn btn-primary" type="submit" (click)="makeRequest()">
        Get Weather
      </button>
    </form>
    <br /><br />

    Tomorrow's Forecast: {{ forecast }}
  `
})
export class ParentComponent {
  appid = "69bc9bb1bbaa496601358677ea57a017";
  city;
  forecast;

  constructor(private http: HttpClient) {}

  makeRequest() {
    this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${
        this.appid
      }`)
      .pipe(
        map((response: any) => {
          return response.weather[0].description;
        })
      )
      .subscribe((forecast: any) => {
        this.forecast = forecast;
      });
  }
}
