import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'u2u-hello',
  template: `
  <div>
    <p>Welcome {{user.userName}}</p>
    <input type="button" (click)="sayHello()" value="Hello"/>
  </div>
  `
})
export class HelloComponent {
  user: User = { userName: 'Diedrik', password : 'password' };

  sayHello() {
    console.log('Hello my name is:', this.user.userName);
  }
}
