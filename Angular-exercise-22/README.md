# Validating a Reactive Form
### [Angular 2 Fundamentals](https://app.pluralsight.com/courses/angular2-fundamentals) Practice Exercise

**_Instructions_**: This app has a create event form that is already wired up to save new events. To get 
to the form in the application, click the "Create New Event" link on the events list page. The form is
wired up with Reactive Forms but does not have any validation. Add validation to the form that displays an 
error message next to the field(s) that have an error. Disable the Save button when the form is invalid so 
that the user can't save an invalid event. Add the following validations: make all fields required; make 
the country both required and require it to consist of two upper-case letters. Be sure to show the 
appropriate error message for the country field depending on which validation is triggered. To do this you 
will need to:

1. Add the appropriate validators to the fields as defined above

1. Add a validation messages for each field and add styles to the component to make those validation messages
   appear how and where you want them to.

1. Make the validation messages appear only if the fields are invalid and have been touched.
 
1. Bind the disabled property on the save button to the `invalid` property of the form.

1. _(Optional)_ Style the input fields so that they have a different background color if they are invalid. 

A finished version of this exercise is available here for reference: http://plnkr.co/edit/uPThfSoKbeOQa0PFmdVg?p=info
