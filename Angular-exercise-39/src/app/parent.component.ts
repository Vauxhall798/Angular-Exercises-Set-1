import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "parent",
  template: `
    <h1>Massaging Requested Data with Map</h1>

    <button class="btn btn-primary" (click)="makeRequest()">
      Send Request
    </button>

    <div *ngFor="let movie of movieList">
      {{ movie.title }}
    </div>
  `
})
export class ParentComponent {
  movieList;

  constructor(private http: HttpClient) {}

  makeRequest() {
    this.http.get("https://swapi.dev/api/films/")
      .pipe(
      map((response: any) => {
        return response.results;
      })
    )
    .subscribe((data: any) => {
      this.movieList = data;
    });
  }
}
