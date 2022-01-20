import { Directive,OnInit,ElementRef } from '@angular/core';
import { ParentComponent } from './parent.component';

@Directive({
  selector:'[hide]'
})

export class HideDirective implements OnInit{
  constructor(private ref:ElementRef){

  }
   ngOnInit() {
    this.ref.nativeElement.addEventListener('mouseover', e => {
      this.ref.nativeElement.style.visibility = 'hidden';
    })
  }
}