import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `
  <multi-slot>
    <div slot1>
      This content goes in slot 1
    </div>
    <div slot2>
      This content goes in slot 2
    </div>
    <div slot3>
      This content goes in slot 3
    </div>
  </multi-slot>
  `
})
export class HomeComponent implements OnInit {


  constructor() {
  }

}

