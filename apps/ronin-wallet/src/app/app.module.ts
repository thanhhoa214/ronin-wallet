import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { rootRoutes } from './util/root.routes';
import { NzRootModule } from './modules/base/ng-zorro-antd/nz-root.module';
import { StateManagementModule } from './modules/base/state-management.module';
import { CoreDataAccessModule } from './data-access';
import { AuthDataAccessModule } from './modules/auth/data-access';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRoutes),
    NzRootModule,

    StateManagementModule,
    AuthDataAccessModule,
    CoreDataAccessModule,

    NgxMaskModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
