import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { environment } from '../../../environments/environment';
import { AuthState } from '../auth/data-access';

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      compatibility: {
        strictContentSecurityPolicy: true,
      },
    }),
    NgxsStoragePluginModule.forRoot({ key: [AuthState] }),
    environment.production
      ? []
      : [
          NgxsReduxDevtoolsPluginModule.forRoot(),
          NgxsLoggerPluginModule.forRoot(),
        ],
  ],
})
export class StateManagementModule {}
