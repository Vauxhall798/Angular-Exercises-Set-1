import { Routes } from '@angular/router'

import { EventsListComponent} from './events-list.component'
import { EventDetailsComponent} from './event-details.component'
import { EventDetailsActivator } from './event-details-activator.service'

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:eventId', 
    component: EventDetailsComponent, 
    canActivate: [EventDetailsActivator],  
    canDeactivate: [EventDetailsActivator]
  },
  { path: '', redirectTo: '/events', pathMatch:'full' },
]