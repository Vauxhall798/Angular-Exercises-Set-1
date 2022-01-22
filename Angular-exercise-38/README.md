# Making an HTTP Request
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: This project contains a parent component with a single button.
When the button is pressed, the client should make a GET request to the 
following Url: "http://swapi.dev/api/films/", and then assign the returned 
data's "results" property to the movieList property of the component.
This will display the data on the page.


To Do This:

1. issue the get call from the http object with the given Url.
3. subscribe to the resulting observable and grab the proper data and assign it to the movieList property so that the titles are displayed.

Note: do NOT use the map operator. That will be done in the next exercise.


A finished version of this exercise is available here for reference: https://stackblitz.com/edit/angular-ivy-ajo7vf?file=src%2Fapp%2Fparent.component.ts
