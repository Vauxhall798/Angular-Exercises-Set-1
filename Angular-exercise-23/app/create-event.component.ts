import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { EventService } from './event.service'

@Component({
  selector: 'create-event',
  templateUrl: 'app/create-event.component.html',
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
    em {color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}

  `]
})
export class CreateEventComponent {
  eventForm: FormGroup
  location: FormGroup
  name: FormControl = new FormControl('', Validators.required)
  date: FormControl = new FormControl('', [Validators.required,this.requireWeekday])
  time: FormControl = new FormControl('', Validators.required)
  address: FormControl = new FormControl('', Validators.required)
  city: FormControl = new FormControl('', Validators.required)
  country: FormControl = new FormControl('', [Validators.required, Validators.pattern('[A-Z]{2}')])
  
  constructor(private eventService:EventService, private router:Router) {
    
  }
  
  ngOnInit() {
    this.location = new FormGroup({
      address: this.address,
      city: this.city,
      country: this.country
    })

    this.eventForm = new FormGroup({
      name: this.name,
      date: this.date,
      time: this.time,
      location: this.location
    })
  }
 requireWeekday(control: FormControl): {[key: string]: any} {
  let date = new Date(control.value)
  if (isNaN(date)) return null
  
  let dayOfWeek = date.getDay()
  if (dayOfWeek === 6) 
    return {'requireWeekday': 'Must not be a Saturday'}

  if (dayOfWeek === 0) 
    return {'requireWeekday': 'Must not be a Sunday'}

  return null
}
  saveEvent(event) {
    this.eventService.saveEvent(event)
    this.router.navigate(['/events'])
  }
  
  cancel(form) {
    this.router.navigate(['/events'])
  }
}