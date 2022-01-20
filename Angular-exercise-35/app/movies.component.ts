import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'movies',
  template: `
  
    <h1>Movies</h1>
    
    <a *ngFor="let movie of movies" [routerLink]="['/movies/', movie.id]" routerLinkActive="active">{{movie.name}}</a>
    
    
    <h3>The Current Movie Is &quot;{{currentMovie.name}}&quot; rated {{currentMovie.rating}}</h3>
    
  `,
  styles: [
    'a {margin-right:25px}'  
  ]
})
export class MoviesComponent {
  movies = [
    {name: "Star Wars", rating: 'R', id: 1},  
    {name: "Jaws", rating: 'PG', id: 2},  
    {name: "E.T.", rating: 'R', id: 3},  
    {name: "Teen Wolf", rating: 'G', id: 4},  
    {name: "Ferris Bueller's Day Off", rating: 'G', id: 5},  
  ]
  currentMovie: any;
  
  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    
  this.route.params.forEach((params:Params)=>{
    this.currentMovie=this.movies.filter(m=>m.id==+params['id'])[0]    
  })
}
}
