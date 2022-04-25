import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CurrencyPipeModule } from '../../../util/pipes/currency/currency.module';

// Only modules used more than 10 files
const nzModules = [NzIconModule, NzButtonModule, NzToolTipModule];

@NgModule({
  exports: [CurrencyPipeModule, nzModules],
})
export class NzSharedModule {}
