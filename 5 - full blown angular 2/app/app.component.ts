import { Component } from '@angular/core';


@Component({
  selector: 'my-webshop',
  template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }