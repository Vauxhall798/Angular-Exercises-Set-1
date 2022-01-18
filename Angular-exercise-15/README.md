# Using Route Parameters
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: The events list page in this app links to the event details page. If you run this plunk
you can see that clicking on the event name loads the event details page, but the event details page
is always displaying the same event. Since you can't see the URL in plunker it may not be obvious that
the links are passing event id in the URL, but they are (e.g. "ng-conf 2037" links to `/events/3`). Update the 
`event-details` component to use this parameter when retrieving the event from the `eventService`  To do 
this you will need to:

1. Look at the way the route is defined to find the parameter name for the event id.

1. Update the `event-details` component to use the parameter when calling the events service.

A finished version of this exercise is available here for reference: https://plnkr.co/edit/3UgOQ8bNJy4EQABWi0dF?p=info
