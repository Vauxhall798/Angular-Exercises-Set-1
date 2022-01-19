# Use Opaque Token & @Inject
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: This project contains a parent component, a primeCalc.service.ts file which is blank, 
and a primeCalc.ts file which creates a global variable on the window object named "primeCalc" which is the service that needs to be 
incorporated into the dependency injection system. 

To Do This:

1. create a primeCalc.service.ts file to create an injection token for the calculate prime service
2. in the parent component, use the token to inject the service in the constructor. 
3. call the injected calculate prime service to get the prime number and assigne it to the "prime" variable
4. use the token to add the service to the module's list of providers. You can access the global variable using "window['primeCalc']"


A finished version of this exercise is available here for reference: https://stackblitz.com/edit/angular-gz79ke?file=README.md
