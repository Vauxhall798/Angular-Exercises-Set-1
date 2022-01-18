import { Component } from '@angular/core'
import { EventService } from './event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'event-details',
  template: `
    <h4>Event Details</h4>
    <div>
      <div>Event: {{event?.name}}</div>
      <div>Date: {{event?.date}} </div>      
      <div>Time: {{event?.time}}</div>
      <div>Address: {{event?.location.address}}, {{event?.location.city}}, {{event?.location.country}}</div>
    </div>
    <div class="pad-top">
      <input type="checkbox" (click)="toggleReviewed()" /> Reviewed
    </div>
    <div class="pad-top">
      <a [routerLink]="['/events']">< Back to events</a>
    </div>
  `,
  styles: [`
    .pad-top { margin-top:10px; }
  `]
})
export class EventDetailsComponent {
  event:any
  reviewed:boolean=false
  
  constructor(private eventService:EventService, private activatedRoute:ActivatedRoute) {
    
  }
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId'])
  }
  toggleReviewed() {
    this.reviewed = !this.reviewed
    console.log(this.reviewed)
  }
}