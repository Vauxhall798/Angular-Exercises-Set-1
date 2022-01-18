# Preventing a Route from De-activating
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: In this app you can get to the event details page by clicking one of the links on the events
list page. The event details page has a "Reviewed" checkbox which toggles a `reveiwed` property on the controller
to true or false when checked or un-checked. Add a `canDeactivate` route guard to the event details route that 
prevents the user fro leaving the event details page if the event has not been reviewed. To do this you will need
to:

1. Add a canDeactivate method to the `event-details-activator` service which will check the `reviewed` property
   of the `event-details` component and return true if it has been reviewed or false if not.

1. Wire up the canDeactivate property of the event details route to the canDeactivate guard.

A finished version of this exercise is available here for reference: https://plnkr.co/edit/6Vp72YzJocTCZi1MUE4g?p=info
