import { NgModule }      from '@angular/core';
import { CommonModule}   from '@angular/common';
import { HttpModule }    from '@angular/http';
import { routing }       from './product.routes';

import {ProductListComponent}   from './productlist.component';
import {ProductDetailComponent} from './productdetail.component';


@NgModule({
  imports:      [ CommonModule,  routing, HttpModule ],
  declarations: [ ProductListComponent,
                  ProductDetailComponent ],
  providers:    [ HttpModule ]
})
export class ProductModule { }