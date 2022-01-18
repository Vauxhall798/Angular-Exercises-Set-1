# Pre-loading Data for a Component
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: The `event.service` in this app is written to simulate a long-running API call. Since
it takes a while for the events list component to get it's data, the page partially renders while it is
waiting for the data. Add a route resolver that waits for the data to be loaded before displaying any
part of the events list component. To do this you will need to:

1. Create an `events-list-resolver` service with a resolve method that calls the events service and stores
   the events on the route.

1. Update the `events-list.component` to get the events off the route.

1. Update the route for the events list component to use the resolver you created.

1. Don't forget to add your resolver service to the app module.

A finished version of this exercise is available here for reference: http://plnkr.co/edit/D85MzeVAJqqRlqfhEzMI?p=info
