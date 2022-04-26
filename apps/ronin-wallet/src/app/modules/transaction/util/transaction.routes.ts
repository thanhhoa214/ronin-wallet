export const transactionRoutes = [
  {
    path: 'send',
    loadChildren: () =>
      import('../feature/send/send.module').then((m) => m.SendModule),
    data: { title: 'Send' },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'send',
  },
];
