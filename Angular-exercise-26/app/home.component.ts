import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `
  <h4>{{myText | lowercase}}</h4>
  
  `
})
export class HomeComponent implements OnInit {
  myText = "HELLO THERE. MAKE ME RENDER IN LOWER CASE";

  constructor() {
    
  }

}

