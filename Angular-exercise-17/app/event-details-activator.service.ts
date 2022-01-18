import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from './event.service'

@Injectable()
export class EventDetailsActivator implements CanActivate { 
  constructor(private eventService:EventService, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot) {
    let event = this.eventService.getEvent(+route.params['eventId'])

    return !!event
  }
}