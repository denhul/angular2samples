import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent }      from './products/productlist.component';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: 'app/products/product.module#ProductModule'
  },
  {
    path:'webshop',
    loadChildren: 'app/webshop/webshop.module#WebShopModule'
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
