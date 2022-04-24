import { Route } from '@angular/router';
import { authRoutes } from '../modules/auth/util/auth.routes';

export const rootRoutes: Route[] = [
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];
