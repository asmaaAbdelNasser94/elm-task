import { Routes } from '@angular/router';

export const featuresRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: 'services',
        loadChildren: () => import('./our-services/e-services.routes').then((m) => m.eServicesRoutes),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ],
  },
];
