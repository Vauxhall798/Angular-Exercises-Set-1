# Creating a Custom Validator
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: The create event form in this app is already wired up with validation. To get 
to the form in the application, click the "Create New Event" link on the events list page. We'd like
to make it so that events can't be scheduled on weekends. Add a custom validator that prevents the
date field from being a weekend. Make it so that the validation message says "Cannot be a Saturday" or
"Cannot be a Sunday" based on whether the invalid date is a Saturday or Sunday. To do this you will need to:

1. Add the custom validator.
   _Hint:_ You can cast the value of the date field to a date and get the day of week using this 
   syntax: new Date([string value]).getDay(). If that returns a 6 or 0 it is a Saturday or Sunday.
   Casting a string to a date usi
A finished version of this exercise is available here for reference: http://plnkr.co/edit/rlUVPBV05BaLnbAiJflr?p=info
