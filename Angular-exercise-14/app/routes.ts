import { Routes } from '@angular/router'

import { EventsListComponent} from './events-list.component'
import { EventDetailsComponent} from './event-details.component'

export const appRoutes:Routes = [
  { path: '', component: EventsListComponent },
  { path: 'events/:eventId', component: EventDetailsComponent }
]