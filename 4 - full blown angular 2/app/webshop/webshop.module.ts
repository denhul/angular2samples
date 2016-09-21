import { NgModule }      from '@angular/core';
import { CommonModule}   from '@angular/common';
import { routing }       from './webshop.routes';

import {WebshopListComponent}   from './webshoplist.component';
import {WebShopService}         from './webshop.service';


@NgModule({
  imports:      [ CommonModule,  routing ],
  declarations: [ WebshopListComponent ],
  providers:    [ WebShopService ]
})
export class WebShopModule { }

