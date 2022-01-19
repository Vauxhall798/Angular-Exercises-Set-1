import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `
  <closable-well>
    This is some content that can be hidden
  </closable-well>
  `
})
export class HomeComponent implements OnInit {


  constructor() {
  }

}

