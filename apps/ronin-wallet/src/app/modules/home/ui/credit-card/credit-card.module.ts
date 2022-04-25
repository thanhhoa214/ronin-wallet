import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NzSharedModule } from '../../../base/ng-zorro-antd/shared.module';

@NgModule({
  declarations: [CreditCardComponent],
  imports: [CommonModule, ClipboardModule, NzSharedModule],
  exports: [CreditCardComponent],
})
export class CreditCardModule {}
