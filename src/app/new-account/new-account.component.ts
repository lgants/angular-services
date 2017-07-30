import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

// 'provide' simply means, 'tell angular how to create it'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // type is not optional in this case while creating a service
  // using private is a TS shortcut that adds the loggingService property (i.e. can access this.loggingService)
  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // declaring the service as a variable will work, but doesn't conform with convention
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    this.loggingService.logStatusChange(accountStatus);

  }
}
