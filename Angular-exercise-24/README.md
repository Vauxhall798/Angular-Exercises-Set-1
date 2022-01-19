# Content Projection
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: This project contains a home component (app/home.component.ts) and a closable well component
(app/closable-well.component.ts). The home component uses the closable well component and has some content inside it.
Create the closable well component to use content projection to show the content given by the home component.
Give the closable well component a button that when clicked, hides the entire content. 
You should see nothing but the default blue background after clicking the button.
To do this:

1. Give the closable-well a template that contains a wrapping div with the class of `well`
2. Create a button in the template with classes of `btn` and `btn-primary`, that when clicked, sets a visibility flag
3. Use the visibility flag to hide the entire component with *ngIf
4. Add the ng-content element to project the content from the home component

A finished version of this exercise is available here for reference: http://plnkr.co/edit/W5CQ3sFULgZKaw7UDtLR?p=info
