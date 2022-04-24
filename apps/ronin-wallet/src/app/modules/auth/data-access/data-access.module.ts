import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state';

@NgModule({
  imports: [NgxsModule.forFeature([AuthState])]
})
export class AuthDataAccessModule {}
