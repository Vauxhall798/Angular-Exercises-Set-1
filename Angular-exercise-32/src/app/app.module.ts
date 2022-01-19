import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { TOASTR } from './primeCalc.service';



@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ParentComponent],
  providers: [{ provide: TOASTR, useValue: window['primeCalc'] }],
  bootstrap: [AppComponent],
})
export class AppModule {}
