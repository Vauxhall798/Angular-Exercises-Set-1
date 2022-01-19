import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <h1 *ngIf="quantity > 1 && squaredQuantity === quantity * quantity">Congratulations!</h1>
    
    Quantity: {{quantity}}<br>
    Squared Quantity: {{squaredQuantity}}
  `
})
export class ChildComponent implements OnChanges  {
  @Input() quantity;
  squaredQuantity:number;
  
  constructor() { 
    
  }
  ngOnChanges(){
    this.squaredQuantity=this.quantity*this.quantity
  }
  
  

}

