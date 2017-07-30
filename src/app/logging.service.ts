export class LoggingService {
  // a service is a normal TS class; no need to use a decorator
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
