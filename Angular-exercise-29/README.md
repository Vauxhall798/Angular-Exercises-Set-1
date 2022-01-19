# Use the ngOnChanges lifecycle hook
### [Angular 2 Fundamentals]("https://app.pluralsight.com/courses/angular2-fundamentals") Practice Exercise


**_Instructions_**: This project contains a parent and child component. The parent component has a 
button named "Update Quantity". The child component has a quantity
Input property which is set by the parent. The child has its own property called squaredQuantity that
should contain the square of the quantity it is given by the parent component, and keep that in sync
as the quantity changes from the parent. When the "Update Quantity" button is pressed, the quantity is
changed, which updates the child component's input property. You need to keep the squaredQuantity value
in sync as this happens. As you click the "update quantity" button, you should see a Congratulations message
To Do This: 


1. import OnChanges from @angular/core and implement it on the Child component class (note this is optional)
2. Create the on changes method handler on the child component. The name must match the expected value exactly
3. In this method, keep the squared quantity in sync with the quantity



A finished version of this exercise is available here for reference: http://plnkr.co/edit/KL17KrYd8RCJ3jOnoDbL?p=info
