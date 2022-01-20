import { Component, Inject } from '@angular/core';
import { SimpleLoggerService } from './simpleLogger.service';

@Component({
  selector: 'parent',
  template: `
  
    <h1>Smaller Logger</h1>
    
    <button class="btn btn-primary" (click)="logMessage()">Log Message</button>
    
  `
})
export class ParentComponent implements OnInit {
  prime;
  
  constructor(private logger: SimpleLoggerService) {
    console.log(logger)
    
  }
  
  logMessage() {
    this.logger.logMessage('this message should appear in the console');
  }
  

}

