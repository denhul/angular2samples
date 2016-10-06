import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { ProductModule }        from './products/product.module';
import { WebShopModule }        from './webshop/webshop.module';

import { AppComponent }         from './app.component';
import { NavigationComponent }  from './navigation.component';

import { routing }              from './app.routes';


@NgModule({
  imports:      [ BrowserModule, routing, ProductModule, WebShopModule ],
  declarations: [ AppComponent, NavigationComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebShopModule ]
})
export class AppModule { }