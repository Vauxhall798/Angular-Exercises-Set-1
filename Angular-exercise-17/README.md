# Preventing a Route from Activating
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: There is an invalid event on the events list page (the last one in the list). Clicking
on the link for this event takes you to the event details page for a non-existing event which doesn't look
very nice. Add a `canActivate` route guard to the event details route that prevents the page from loading 
if the event does not exist. To do this you will need to:

1. Add a route activator service that prevents the event details page from loading if the event id is 
   for an event that does not exist.

1. Wire the route activator service up to the route.

1. Don't forget to add your new activator service as a provider in the module

A finished version of this exercise is available here for reference: https://plnkr.co/edit/9RuWDKnA9X31dnaUyHJs?p=info
