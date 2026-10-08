import { Routes } from '@angular/router';

export const eServicesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'actions',
      },
      {
        path: 'actions',
        loadComponent: () =>
          import('./pages/actions-page/actions-page.component').then((m) => m.ActionsPageComponent),
      },
      {
        path: 'start-service',
        loadComponent: () =>
          import('./pages/start-service-page/start-service-page.component').then(
            (m) => m.StartServicePageComponent,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/service-details-page/service-details-page.component').then(
            (m) => m.ServiceDetailsPageComponent,
          ),
      },
    ],
  },
];
