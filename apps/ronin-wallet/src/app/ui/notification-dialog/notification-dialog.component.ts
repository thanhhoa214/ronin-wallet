import { Component, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'ronin-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss'],
})
export class NotificationDialogComponent {
  @Input() title?: string;
  @Input() message?: string;
  @Input() okLabel = 'OK';

  constructor(
    public nzModalRef: NzModalRef<NotificationDialogComponent, void>
  ) {}
}
