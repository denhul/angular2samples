import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';

import { AppComponent }         from './app.component';
import { SchoolComponent }      from './school.component';
import { StudentCreatorComponent } from './studentcreator.component';
import { StudentListComponent } from './studentlist.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StudentCreatorComponent, StudentListComponent, SchoolComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }