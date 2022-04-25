import { Route } from '@angular/router';
import { authRoutes } from '../modules/auth/util/auth.routes';
import {
  IsLoggedInGuard,
  IsNotLoggedInGuard,
} from '../modules/auth/util/guards';

export const rootRoutes: Route[] = [
  {
    path: 'auth',
    children: authRoutes,
    canActivate: [IsNotLoggedInGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('../modules/home/feature/home/home.module').then(
        (m) => m.HomeModule
      ),
    canActivate: [IsLoggedInGuard],
    data: { title: 'Home' },
  },
];
