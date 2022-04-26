import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ConfirmDialogModule } from '../../../ui/confirm-dialog/confirm-dialog.module';
import { AuthState } from './state';

@NgModule({
  imports: [NgxsModule.forFeature([AuthState]), ConfirmDialogModule],
})
export class AuthDataAccessModule {}
