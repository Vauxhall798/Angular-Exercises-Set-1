import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <child #child1></child>
    <button class="btn btn-primary" (click)="child1.stopTimer()">Stop Timer</button>
  `
})
export class ParentComponent {
  
}
