# Adding Style with ngStyle
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: Some of the events displayed in the events-list component are online only (`event.format='Online'`), 
others are in-person only (`event.format='InPerson'`). Some events have neither, but there are no events that have both. 
Use ngStyle to make the event title (`<h2>`) green if the event.format='InPerson', or red if the event.format='Online'. 
If the event.format is neither "InPerson" or "Online", then make the title grey (#aaa). To do this: 

1. You can either use an inline ngStyle expression or bind ngStyle to a function. It may be better to use a function since
   the expression may get long.

**_When you're done, run the Plunk and you should see the appropriate styles applied._**

A finished version of this exercise is available here for reference: https://plnkr.co/edit/TKPWwidM1jS93VnCPAmM?p=info
