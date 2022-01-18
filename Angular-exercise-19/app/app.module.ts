import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';
import { EventService } from './event.service';
import { appRoutes } from './routes'
import { EventsListResolver } from './events-list-resolver.service'

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent
  ],
  providers: [ EventService, EventsListResolver ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

