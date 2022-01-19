import { Component } from '@angular/core';

@Component({
  selector: 'multi-slot',
  template: `<div class="well pointable">
    <div style="border:1px solid red;text-align:center;" (click)="toggle()">
    <h4>Touch</h4>
    <ng-content select="[slot1]" *ngIf="visible"></ng-content>
    </div>
    <div style="border:1px solid green;text-align:center;" (click)="toggle1()">
    <h4>Touch</h4>
    <ng-content select="[slot2]" *ngIf="visible1"></ng-content>
    </div>
    <div style="border:1px solid blue; text-align:center;" (click)="toggle2()">
    <h4>Touch</h4>
    <ng-content select="[slot3]" *ngIf="visible2"></ng-content>
    </div>
    </div>
  `
})
export class MultiSlotComponent {
visible:boolean=false;
visible1:boolean=false;
visible2:boolean=false;
toggle(){
  this.visible=!this.visible
}
toggle1(){
  this.visible1=!this.visible1
}
toggle2(){
  this.visible2=!this.visible2
}
  
}