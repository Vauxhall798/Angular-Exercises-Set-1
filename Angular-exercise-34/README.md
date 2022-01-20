# Creating a Directive
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: This project contains a parent component and a blank hide directive.
The parent component has several divs which have the hide directive on them.
Create a hide directive such that when you mouse over any element with this directive,
the element's style.visibility is set to "hidden"


To Do This:

1. import Directive and create the directive skeleton
2. Give the directive the correct selector to match the "hide" attribute
3. Grab a reference to the element that the directive is on in the constructor
4. In the Init method, add an event listener to the native element on the 'mouseover' event
5. in the callback for the event, set the style.visibility of the native element to the string "hidden"


A finished version of this exercise is available here for reference: http://plnkr.co/edit/XxtxS5YRXLOgDyZti1Kt?p=info
