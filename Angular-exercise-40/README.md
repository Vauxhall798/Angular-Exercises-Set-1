# Using Querystring Parameters
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: This project contains a parent component with an input box
and a button. When the user types in a city name and clicks the button, the
current forecast for tomorrow should display. You will need to construct
the appropriate URL for the request by adding the city which comes 
from the input box, and the appID which comes from the appid property.

The format of the URL is:
https://api.openweathermap.org/data/2.5/weather?q=_CITY_&APPID=_APPID_


To Do This:

1. in the makeRequest method, create the correct URL string and pass it to the http.get method


A finished version of this exercise is available here for reference: https://stackblitz.com/edit/angular-ivy-9wpbub?file=README.md