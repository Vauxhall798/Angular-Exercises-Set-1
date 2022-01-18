import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { EventService } from './event.service'

@Component({
  selector: 'event-details',
  templateUrl: 'app/events-list.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
    td a { color: #df691a }
  `]
})
export class EventsListComponent {
  constructor(private eventService:EventService, private route:ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
}