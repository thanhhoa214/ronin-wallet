import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationDialogComponent } from './notification-dialog.component';
import { NzSharedModule } from '../../modules/base/ng-zorro-antd/shared.module';

@NgModule({
  declarations: [NotificationDialogComponent],
  imports: [CommonModule, NzSharedModule],
  exports: [NotificationDialogComponent],
})
export class NotificationDialogModule {}
