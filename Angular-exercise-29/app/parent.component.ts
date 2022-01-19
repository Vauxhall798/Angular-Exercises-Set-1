import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
  
    <child [quantity]="myQuantity"></child>
    <br>
    <button class="btn btn-primary" (click)="updateQuantity()">Update Quantity</button>
  
  `
})
export class ParentComponent implements OnInit {
  myQuantity = 1;

  constructor() { 
    
  }
  
  updateQuantity() {
    this.myQuantity++;
  }

}

