import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('../feature/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
