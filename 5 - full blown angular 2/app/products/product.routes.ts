import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './productlist.component';

const productRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(productRoutes);