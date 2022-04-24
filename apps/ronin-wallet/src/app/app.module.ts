import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { rootRoutes } from './util/root.routes';
import { NzRootModule } from './modules/base/ng-zorro-antd/nz-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRoutes),
    NzRootModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
