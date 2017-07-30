import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

// 'provide' simply means, 'tell angular how to create it'
// removed AccountsService from provider since that would create a new instance of the service, which is instantiated on a parent component and thereby passed down through heirarchical dependency injection
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  // no longer need to emit the event once the AccountsService service was added
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // type is not optional in this case while creating a service
  // using private is a TS shortcut that adds the loggingService property (i.e. can access this.loggingService)
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // no longer need to emit the event once the AccountsService service was added
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // declaring the service as a variable will work, but doesn't conform with convention
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus)

  }
}
