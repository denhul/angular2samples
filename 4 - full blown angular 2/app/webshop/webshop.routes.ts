import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebshopListComponent } from './webshoplist.component';

const webshopRoutes: Routes = [
  {
    path: 'webshop',
    component: WebshopListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(webshopRoutes);