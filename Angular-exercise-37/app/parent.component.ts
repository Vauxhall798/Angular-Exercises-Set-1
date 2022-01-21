import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'parent',
  template: `
    <h1>Turning an Observable into a Promise</h1>
    <button (click)="listen()" class="btn btn-primary">Listen to Promise</button>
    <br>
    The value is {{result}}
    <br>
  
    <div *ngIf="result === 35">Success!</div>
   
  `
})
export class ParentComponent {
  obs;
  result;
  promise;
  
  constructor() {
    this.obs = Observable.of(35);
  }
  
  ngOnInit() {
   this.promise=this.obs.toPromise()
  }
  
  listen() {
    this.promise.then((val) => {
      this.result = val;
    })
  }

  
  
}

