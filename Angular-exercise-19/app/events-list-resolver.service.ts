import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from './event.service'
import { EventDetailsComponent } from './event-details.component'

@Injectable()
export class EventsListResolver implements Resolve<any> { 
  constructor(private eventService:EventService) {

  }

  resolve() {
    return this.eventService.getEvents().map(events => events)
  }
}