import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {
  @Input() title!: string;
  @Input() message!: string;
}
