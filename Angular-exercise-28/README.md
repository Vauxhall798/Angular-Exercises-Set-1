# Creating Custom Pipes
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: This project contains a home component (app/home.component.ts) with a property
named "myText" that uses a titleCase pipe. Build the title case pipe in the app/title-case.pipe.ts file
such that the message "This Title Should Be In Title Case" is displayed on the page in an h1 tag.
To Do This:


1. import Pipe and PipeTransform from @angular/core
2. use the @Pipe decorator, passing in the name of the pipe. Be sure to match the expected value in the home component
3. create the pipe class and export it
4. implement the transform function to turn the input string into a title cased string


A finished version of this exercise is available here for reference: http://plnkr.co/edit/5csqcxpXJ8p6QENjQOjk?p=info
