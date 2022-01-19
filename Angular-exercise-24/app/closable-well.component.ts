import { Component } from '@angular/core';

@Component({
  selector: 'closable-well',
  template: `<div class='well pointable' (click)="toggle()">
   <h4> Click Me</h4>
    <ng-content *ngIf=visible></ng-content>
    </div>
  `
})
export class ClosableWellComponent {
visible:boolean=false;
toggle(){
  this.visible=!this.visible
}

}