import { Component, Inject } from '@angular/core';
import { TOASTR } from './primeCalc.service';

@Component({
  selector: 'parent',
  template: `
  
    <h1>Prime Number</h1>
    The Prime Number Is: {{prime}}<br />
    <div *ngIf="prime === 5">Success!</div>
    <button class="btn btn-primary" (click)="getPrime()">Get Prime #</button>
    
  `,
})
export class ParentComponent {
  prime;

  constructor(@Inject(TOASTR) private primeCalc) {}

  getPrime() {
    this.prime = this.primeCalc.calculatePrime();
  }
}
