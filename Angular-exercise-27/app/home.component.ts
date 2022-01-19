import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `
  {{theDate | date}} - should be "April 1, 2035"<br>
  {{theDate | date:"MM-dd-y"}} - should be "04-01-2035"<br>
  {{theDate | date:"hh:mm a"}} - should be "2:15 PM"<br>
  {{theDate | date:"MMMM d,HH:mm"}} - should be "April 1, 14:15"<br>
  
  `
})
export class HomeComponent implements OnInit {
  theDate = new Date(2035, 3, 1, 14, 15);

  constructor() {
    
  }

}

