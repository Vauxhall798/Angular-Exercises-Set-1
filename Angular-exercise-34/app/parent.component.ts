import { Component } from '@angular/core';
import { HideDirective }   from './hide.directive';

@Component({
  selector: 'parent',
  template: `
  
    <h1>Creating a Directive</h1>
    <span>Mouse over to hide any of the following:</span>
    <div hide>Star Wars</div>
    <div hide>Jaws</div>
    <div hide>E.T.</div>
    <div hide>Teen Wolf</div>
    <div hide>Ferris Bueller's Day Off</div>
    
    
  `,
  styles: [
    'div {width: 250px; margin-bottom:10px; background-color:black; padding:4px}'
  ]
})
export class ParentComponent {
  
  constructor() {
  }
  
}

