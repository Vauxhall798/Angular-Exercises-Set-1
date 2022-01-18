import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from './event.service'
import { EventDetailsComponent } from './event-details.component'

@Injectable()
export class EventDetailsActivator implements CanActivate, CanDeactivate { 
  constructor(private eventService:EventService, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot) {
    let event = this.eventService.getEvent(+route.params['eventId'])

    return !!event
  }
  
  canDeactivate(component:EventDetailsComponent) {
    return component.reviewed
  }
}