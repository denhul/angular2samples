import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { HelloComponent }         from './hello.component';



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloComponent],
  bootstrap:    [ HelloComponent ]
})
export class AppModule { }