import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'my-account',
    loadChildren: () =>
      import('my-account/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
