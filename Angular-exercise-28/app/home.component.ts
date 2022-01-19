import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `
  <h1>{{myText | titlecase}}</h1>
  
  `
})
export class HomeComponent implements OnInit {
  myText = "this title should be in title case";

  constructor() {
    
  }

}

