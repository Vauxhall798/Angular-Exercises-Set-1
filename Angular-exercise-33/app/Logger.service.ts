import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logMessage(msg) {
    console.log(msg)
  }
  
  logError(msg) {
    console.error(msg);
  }
  
  logUser(user, msg) {
    console.log('the ' + user.name + ' user has had the following event: ' + msg)
  }
  
  logUserError(user, msg) {
    console.error('Error for ' + user.name + ': ' + msg)
  }
}