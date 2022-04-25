export const transactionRoutes = [
  {
    path: 'send',
    loadChildren: () =>
      import('../feature/send/send.module').then((m) => m.SendModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'send',
  },
];
