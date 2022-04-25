import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyItemComponent } from './currency-item.component';
import { NzSharedModule } from '../../modules/base/ng-zorro-antd/shared.module';

@NgModule({
  declarations: [CurrencyItemComponent],
  imports: [CommonModule, NzSharedModule],
  exports: [CurrencyItemComponent],
})
export class CurrencyItemModule {}
