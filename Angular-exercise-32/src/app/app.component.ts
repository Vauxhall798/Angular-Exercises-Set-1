import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ' <parent></parent>',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
}
