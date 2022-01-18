# Hiding and Showing Elements with ngSwitch
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: Some of the events displayed in the events-list component are online only (`event.format`='Online'), 
others are in-person only (`event.format`='InPerson'). Some events have neither, but there are no events that have both. 
Unfortunately, the "In-Person", "Online Only" and "TBD" messages are displaying for all events. Use ngSwitch to show only 
the appropriate message for each event. Each event should only have one message. To do this: 

1. Use ngSwitch to show and hide the appropriate messages based on the `event.format`.
   
   (You will need to add a span around the current messages to add the ngSwitch directive to.)


**_When you're done, run the Plunk and you should see one (and only one) message next to each event._**

A finished version of this exercise is available here for reference: https://plnkr.co/edit/LlCxcZi8FqwldhuftbQc?p=info
