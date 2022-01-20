import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { ParentComponent }   from './parent.component';

import { SimpleLoggerService } from './simpleLogger.service'
import { LoggerService } from './Logger.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ParentComponent,
  ],
  providers: [
    LoggerService,
    {provide:SimpleLoggerService,useExisting:LoggerService}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

